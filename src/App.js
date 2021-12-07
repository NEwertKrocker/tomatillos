import React, { Component } from 'react';
// import movieData from './movieData';
import Movies from './Movies'
import MovieDetails from './MovieDetails';
import './css/App.css'
import NavBar from './NavBar';
import { getAllMovies, getSingleMovie, getMovieVideos } from './apiCalls';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: {
        movies: []
      },
      showDetails: false,
      error: '',
      movieDetails: {
        "movie": {
          id: 1,
          title: "Fake Movie Title",
          poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
          backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
          release_date: "2019-12-04",
          overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!",
          average_rating: 6,
          genres: ["Drama"],
          budget:63000000,
          revenue:100853753,
          runtime:139,
          tagline: "It's a movie!"
        }
      },
      movieVideos: []
    }
  }

  displayDetails = (event, id) => {
    getSingleMovie(id)
      .then(data => {
        this.setState({ movieDetails: data })
      })
      .catch(err => this.setState({ error: 'There was a problem loading your movie. Try again later' }));
    this.setState({ showDetails: true })

    getMovieVideos(id)
    .then(data => {
      console.log('movieVideo>>>>>>', data.videos);
      this.setState({ movieVideos: data.videos })
    })
    .catch(err => this.setState({ error: 'There was a problem loading your movie. Try again later' }));
  }

  hideDetails = () => {
    this.setState({ showDetails: false })
  }

  componentDidMount = () => {
    getAllMovies()
      .then(data => {
        this.setState({ movies: data })
      })
      .catch(err => {
        console.log(err)
        this.setState({ error: 'Something went wrong, please try at a later time.' })
      });
  }

  render() {
    return (
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Movies movies={this.state.movies} displayDetails={this.displayDetails}/>}/>
          <Route path=":movie_id" element={<MovieDetails details={this.state.movieDetails["movie"]} hideDetails={this.hideDetails} movieVideos={this.state.movieVideos}/>}/>
        </Routes>
        {this.state.error && <h2>{this.state.error}</h2>}
        // {!this.state.showDetails && <Movies movies={this.state.movies} displayDetails={this.displayDetails} />}
        // {this.state.showDetails && <MovieDetails details={this.state.movieDetails["movie"]} hideDetails={this.hideDetails} movieVideos={this.state.movieVideos}/>}
      </main>
    )
  }
}

export default App;
