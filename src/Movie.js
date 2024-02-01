// Movie.js
import React from 'react';

const Movie = ({ movieData }) => {
  return (
    <div className="movie">
      <img src={movieData.Poster} alt={`${movieData.Title} Poster`} />
      <h2>{movieData.Title}</h2>
      <p>{movieData.Year}</p>
    </div>
  );
};

export default Movie;
