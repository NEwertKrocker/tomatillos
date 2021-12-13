import React, {Component} from "react";
import { getMovieVideos } from "./apiCalls";

class MovieTrailer extends Component {
  constructor() {
    super();
    this.state = {
      movieVideo: {}
    }
  }

  componentDidMount() {
    getMovieVideos(this.props.id)
      .then(data => {
        const video = data.videos.find(video => video.type.includes('Trailer'));
        console.log(video)
        this.setState({ movieVideo: video})
    })
  }

  render() {
    return (
      <>
        <iframe
          title='Movie Trailer'
          src={`https://www.youtube.com/embed/${this.state.movieVideo.key}?autoplay=0`}
          frameBorder=''
          allow='autoplay; encrypted-media'
          allowFullScreen
          width={960}
          height={544}
          objectFit= 'cover'
        >
        </iframe>
      </>
    )
  }
}

export default MovieTrailer;
