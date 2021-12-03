import React from 'react';
import './css/MoviePoster.css'

const MoviePoster = (props) => {
  console.log('props>>>', props);
  return (
    <article className='movie-poster'>
      <img src={props.posterPath} alt={props.title} />
      <section className='movie-poster-details'>
        <h2>{props.title}</h2>
        <p>Rating: {props.rating}</p>
      </section>
    </article>
  )
}

export default MoviePoster;