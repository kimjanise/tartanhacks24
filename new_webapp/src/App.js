import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Placeholder components for different pages
const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>Welcome to our movie recommendation app!</p>
  </div>
);

const Recommendations = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Simulate fetching data from your backend
    const fetchMovies = async () => {
      const response = await fetch('/api/recommendations'); // Adjust the endpoint as needed
      const data = await response.json();
      setMovies(data.movies);
    };

    fetchMovies().catch(console.error);
  }, []);

  return (
    <div>
      <h1>Movie Recommendations</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title} ({movie.year})</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recommendations">Recommendations</Link>
            </li>
          </ul>
        </nav>

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
