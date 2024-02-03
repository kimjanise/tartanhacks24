import requests, json
from urllib.parse import quote
from letterboxdpy import user
from datetime import datetime

user_input = input("Enter your Letterboxd username: ")
profile = user.User(user_input) 
print(user.user_diary(profile))

url = f"https://api.themoviedb.org/3/search/movie?query={user_input}&include_adult=false&language=en-US&page=1"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzcyNTdjYzlkOTA5M2I3YzNiMWJmMjg2N2U3NGFkNyIsInN1YiI6IjY1YmQ5ZTgwOTMxZWExMDE2Mzk5YjdlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qzaq5apx4cqANU8JBrBm9JpqqRFGuG_ckEIyAJypvXA"
}

response = requests.get(url, headers=headers)
print(response.text)

data = json.loads(response.text)
first_id = data['results'][0]['id']

print("First id:", first_id)

url = f"https://api.themoviedb.org/3/movie/{first_id}/recommendations?language=en-US&page=1"

response = requests.get(url, headers=headers)

print(response.text)