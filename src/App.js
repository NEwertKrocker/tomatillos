import React, { Component } from 'react';
import movieData from './movieData';
import Form from './Form'
import Movies from './Movies'
import './css/App.css'

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
        <h1>Tomatillos</h1>
        <Form />
        <section className='movie-container'>
          <Movies movies={this.state.movies}/>
        </section>
      </main>
    )
  }
}

export default App;