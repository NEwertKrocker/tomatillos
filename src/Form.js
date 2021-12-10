import React, { Component } from 'react';
import './css/Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      searchBarValue: ''
    }
  }

  handleChange = event => {
    this.setState({ searchBarValue: event.target.value });
    this.props.searchMovies(this.state.searchBarValue);
  }

  render() {
    return (
      <form>
        <input 
          type='text'
          name='searcBarValue'
          placeholder='Search Movie...'
          value={this.state.searchBarValue}
          onChange={event => this.handleChange(event)}
        />
      </form>
    )
  }
}

export default Form;
