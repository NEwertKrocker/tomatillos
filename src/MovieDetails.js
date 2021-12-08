import React from 'react';
import './css/MovieDetails.css'
import backIcon from './assets/back-arrow.svg'
import { Link } from 'react-router-dom';
import Movies from './Movies'

const MovieDetails = (props) => {
  const movieTrailer = props.movieVideos.find(video => video.type.includes('Trailer'))
  const details = props.details;
  const rating = Math.floor(details.average_rating * 10) / 10;
  const yearRelease = new Date(details.release_date).getFullYear()
  const backgroundStyle = {
    backgroundImage:
    `linear-gradient(to right, #1C1D1E, 50%, transparent),
     url(${props.details['backdrop_path']})`,
     backgroundRepeat: 'no-repeat',
     width: '100%',
     height: '100%',
     backgroundPosition: 'center',
     backgroundSize: 'cover'
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
