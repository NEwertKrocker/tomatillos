import React, { Component } from 'react';
import './css/MovieDetails.css';
import { getSingleMovie, getMovieVideos } from './apiCalls';
import backIcon from './assets/back-arrow.svg'
import { Link } from 'react-router-dom';
// import Movies from './Movies'

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movieDetails: {}
    }
  }

  return (
    <section className="details-wrapper" style={backgroundStyle}>
      <Link to="/" className='back-arrow-container'>
        <img className="back-arrow-image"src={backIcon} alt='back to home'/>
      </Link>
      <article className="movie-details-container">
        <section className='movie-details'>
          <div className='basic-info'>
            <h2 className='movie-title'> {details.title} </h2>
            <p className='stats'> {yearRelease} </p>
            <p className='stats'> {`⭐️ ${rating}`} </p>
          </div>
          <p> {details.tagline} </p>
          <p> {details.overview} </p>
        </section>
        { props.movieVideos.length && <iframe
          title={`${props.details.title}Trailer Video Player`}
          src={`https://www.youtube.com/embed/${movieTrailer.key}?autoplay=1`}
          frameBorder=''
          allow='autoplay; encrypted-media'
          allowFullScreen
          width={960}
          height={544}
          objectFit= 'cover'
        ></iframe> }
      </article>
    </section>
  )
}

export default MovieDetails;
