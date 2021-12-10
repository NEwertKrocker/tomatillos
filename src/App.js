import React, { Component } from 'react';
import Movies from './Movies'
import './css/App.css'
import NavBar from './NavBar';
import SelectedMovie from './SelectedMovie'
import { getAllMovies } from './apiCalls';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
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

  render() {
    return (
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Movies movies={this.state.movies} />}/>
          <Route path=":movie_id" element={<SelectedMovie />}/>
        </Routes>
        {this.state.error && <h2>{this.state.error}</h2>}
      </main>
    )
  }
}

export default App;
