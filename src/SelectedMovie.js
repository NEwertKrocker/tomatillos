import React from 'react';
import { useParams } from 'react-router';
import MovieDetails from './MovieDetails';
// import './SelectedPage.css';

const SelectedMovie = () => {
  const id = useParams()['movie_id'];
    return <MovieDetails id={id} />
}

export default SelectedMovie;