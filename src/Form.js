import React from 'react';
import './css/Form.css';

const Form  = ({ searchMovies }) => {
  return (
    <form>
      <input
        type='text'
        name='searcBarValue'
        placeholder='Search Movie...'
        onChange={event => searchMovies(event.target.value)}
      />
    </form>
  )
}

export default Form;
