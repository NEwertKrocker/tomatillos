import React, { Component } from 'react';
import './css/Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      searchBarValue: ''
    }
  }

  render() {
    return (
      <form>
        <input type='text' placeholder='Search Movie...'/>
      </form>
    )
  }
}

export default Form;
