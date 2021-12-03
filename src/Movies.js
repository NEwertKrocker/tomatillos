import React from 'react';
import MoviePoster from './MoviePoster';
import './css/Movies.css'

const Movies = ({ movies }) => {
  // console.log(movies.movies);
  const moviePosters = movies.movies.map(movie => {
    // console.log("<in Movie Posters>>", movie)
    return (
      <MoviePoster
        // movie={movie}
        id={movie.id}
        posterPath={movie['poster_path']}
        backdropPath={movie['backdrop_path']}
        title={movie.title}
        rating={movie['average_rating']}
        releaseDate={movie['release_date']}
        key={movie.id}
      />
    )
  });

  return (
    <section className='movies-container'>
      {moviePosters}
    </section>
  )
}

export default Movies;
