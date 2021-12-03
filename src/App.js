import React, { Component } from 'react';
import movieData from './movieData';
// import Form from './Form'
import Movies from './Movies'

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
        {/* <Form /> */}
        <Movies movies={this.state.movies}/>
      </main>
    )
  }
}

export default App;