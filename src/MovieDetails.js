import React, { Component } from 'react';
import './css/MovieDetails.css';
import { getSingleMovie } from './apiCalls';
import backIcon from './assets/back-arrow.svg'
import { Link } from 'react-router-dom';
import MovieTrailer from './MovieTrailer'

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movieDetails: {}
    }
  }

  componentDidMount() {
    getSingleMovie(this.props.id)
      .then(data => {
        this.setState({ movieDetails: data.movie})
    })
  }

  getRating(movie) {
    return Math.floor(movie.average_rating * 10) / 10;
  }

  getReleaseYear(movie) {
    return new Date(movie.release_date).getFullYear()
  }

  render() {
    const movie = this.state.movieDetails;
    const backgroundStyle = {
        backgroundImage:
        `linear-gradient(to right, #1C1D1E, 50%, transparent),
         url(${movie['backdrop_path']})`,
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
              <h2 className='movie-title'> {movie.title} </h2>
            <div className='basic-info'>
              <p className='stats'> {this.getReleaseYear(movie)} </p>
              <p className='stats'> {`⭐️ ${this.getRating(movie)}`} </p>
              <p className='stats'>{`${movie.runtime} mins`}</p>
            </div>
            <p className='movie-description'> {movie.tagline} </p>
            <p className='movie-description'> {movie.overview} </p>
          </section>
          <MovieTrailer id={this.props.id}/>
        </article>
      </section>
    )
  }
}

export default MovieDetails;
