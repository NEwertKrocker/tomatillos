import React from 'react';
import './css/MovieDetails.css'

const MovieDetails = (props) => {
  const details = props.details;

  return (
    <div className="details-wrapper">
      <article className="movie-details">
        <div>
          <h2> {details.title} </h2>
          <p> {details.release_date} </p>
          <p> {details.tagline} </p>
          <p> {details.overview} </p>
        </div>
        <img className="details-poster" src={details.poster_path} alt={details.title}/>
      </article>
      <button className="back-button" onClick={props.hideDetails}>Go Back</button>
    </div>
  )
}

export default MovieDetails;
