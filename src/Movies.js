import React from 'react';
import MoviePoster from './MoviePoster';
import './css/Movies.css'
import { Link } from 'react-router-dom';

const Movies = ({ movies, filteredMovies }) => {
  const moviePosters = movies.map(movie => {
    return (
      <Link to={`${movie.id}`} key={movie.id}>
        <MoviePoster
          id={movie.id}
          posterPath={movie['poster_path']}
          backdropPath={movie['backdrop_path']}
          title={movie.title}
          rating={movie['average_rating']}
          releaseDate={movie['release_date']}
          key={movie.id}
        />
      </Link>
    )
  });

  const filteredMoviePosters = filteredMovies.map(movie => {
    return (
      <Link to={`${movie.id}`} key={movie.id}>
        <MoviePoster
          id={movie.id}
          posterPath={movie['poster_path']}
          backdropPath={movie['backdrop_path']}
          title={movie.title}
          rating={movie['average_rating']}
          releaseDate={movie['release_date']}
          key={movie.id}
        />
      </Link>
    )
  })

  return (
    <section className='movies-container'>
      {!filteredMovies.length ? moviePosters : filteredMoviePosters}
    </section>
  )
}

export default Movies;
