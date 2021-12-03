import React from 'react';

const MoviePoster = (props) => {
  console.log('props>>>', props);
  return (
    <article>
      <p>rating {props.rating}</p>
    </article>
  )
}

export default MoviePoster;