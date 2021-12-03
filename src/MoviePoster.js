import React from 'react';
import './css/MoviePoster.css'

const MoviePoster = (props) => {
  const rating = Math.floor(props.rating * 10) / 10;
  return (
    <article className='movie-poster' onClick={props.displayDetails}>
      <img src={props.posterPath} alt={props.title} />
      <section className='movie-poster-details'>
        <h2>{props.title}</h2>
        <p>{rating} ⭐️</p>
      </section>
    </article>
  )
}

export default MoviePoster;
