// MovieList.js
import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Movie key={index} movieData={movie} />
      ))}
    </div>
  );
};

export default MovieList;
