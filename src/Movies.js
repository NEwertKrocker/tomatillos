import React from 'react';
import MoviePoster from './MoviePoster';
import './css/Movies.css'
import { Link, useParams } from 'react-router-dom';

const Movies = ({ movies, displayDetails }) => {

console.log(useParams())

  const moviePosters = movies.movies.map(movie => {
    // console.log("<in Movie Posters>>", movie)
    return (
      <Link to={`${movie.id}`}>
      <MoviePoster
        // movie={movie}
        id={movie.id}
        posterPath={movie['poster_path']}
        backdropPath={movie['backdrop_path']}
        title={movie.title}
        rating={movie['average_rating']}
        releaseDate={movie['release_date']}
        key={movie.id}
        displayDetails={displayDetails}
      />
      </Link>
    )
  });

  return (
    <section className='movies-container'>
      {moviePosters}
    </section>
  )
}

export default Movies;
