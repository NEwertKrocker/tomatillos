import React, { Component } from 'react';
import movieData from './movieData';
import Movies from './Movies'
import './css/App.css'
import NavBar from './NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData
    }
    
  }

  render() {
    return (
      <main>
        <NavBar />
        <section className='movie-container'>
          <Movies movies={this.state.movies}/>
        </section>
      </main>
    )
  }
}

export default App;