// App.js
import React, { useState } from 'react';
import Header from './Header';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import Footer from './Footer';
import './App.css';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const apiKey = 'fa5a9e44'; // Replace with your actual OMDB API key

  const searchMovies = async (searchTerm) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching movie data:', error.message);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
