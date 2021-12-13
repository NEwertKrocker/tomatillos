const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .catch(err => console.log(err))
}

const getSingleMovie = id => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .catch(err => {
      console.log(err)
      throw err.message
    })
}

const getMovieVideos = id => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    .then(response => response.json())
    .catch(err => console.log(err))
}

export { getAllMovies, getSingleMovie, getMovieVideos }
