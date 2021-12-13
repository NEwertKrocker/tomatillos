import React, { Component } from 'react';
import Movies from './Movies'
import './css/App.css'
import NavBar from './NavBar';
import SelectedMovie from './SelectedMovie'
import Error from './Error'
import { getAllMovies } from './apiCalls';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
      error: '',
    }
  }

  componentDidMount = () => {
    getAllMovies()
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch(err => {
        console.log(err)
        this.setState({ error: 'Something went wrong, please try at a later time.' })
      });
  }

  searchMovies = inputValue => {
    const filteredMovies = this.state.movies.filter(movie => {
      return movie.title.toLowerCase().includes(inputValue.toLowerCase());
    });

    this.setState({ filteredMovies: filteredMovies }, )
  }

  render() {
    return (
      <main>
        <NavBar searchMovies={this.searchMovies}/>
        <Routes>
          {!this.state.error && <Route path="/" element={<Movies movies={this.state.movies} filteredMovies={this.state.filteredMovies}/>}/>}
          <Route path=":movie_id" element={<SelectedMovie />}/>
        </Routes>
        {this.state.error && <Error />}
      </main>
    )
  }
}

export default App;
