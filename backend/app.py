import requests, json, faiss
from urllib.parse import quote
from letterboxdpy import user
from langchain.embeddings import OpenAIEmbeddings
from dotenv import load_dotenv
import numpy as np
import pandas as pd

from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

user_input = input("Enter your Letterboxd username: ").strip()
# user_input = "kaitlynng"
favorites = user.User(user_input).favorites
favorites = [item[0] for item in favorites]
print(favorites)

df = pd.read_csv('backend/directors-movies.csv')
all_recs = []
index = faiss.read_index("backend/embeddings.index")
load_dotenv("backend/.env")
embeddings = OpenAIEmbeddings()

for movie in favorites:
    movie = quote(movie)
    url = f"https://api.themoviedb.org/3/search/movie?query={movie}&include_adult=false&language=en-US&page=1"

    headers = {
        "accept": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzcyNTdjYzlkOTA5M2I3YzNiMWJmMjg2N2U3NGFkNyIsInN1YiI6IjY1YmQ5ZTgwOTMxZWExMDE2Mzk5YjdlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qzaq5apx4cqANU8JBrBm9JpqqRFGuG_ckEIyAJypvXA"
    }

    response = requests.get(url, headers=headers)

    data = json.loads(response.text)
    overview = data['results'][0]['overview']
    
    test_sample = embeddings.embed_query(overview)
    test_sample = np.array([test_sample]).astype("float32")
    k = 5
    distances, indices = index.search(test_sample, k)

    recs = df.iloc[indices[0]]
    recs_dict = recs.to_dict(orient='records')
    all_recs += recs_dict

seen = set()
unique_list_of_recs = []

for d in all_recs:
    if d['title'] not in seen:
        unique_list_of_recs.append(d)
        seen.add(d['title'])

print(unique_list_of_recs)

@app.route('/api/recommendations')
@cross_origin()
def get_recommendations():
    return jsonify({
        "movies": unique_list_of_recs
    })