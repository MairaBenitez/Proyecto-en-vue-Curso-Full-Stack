import axios from 'axios';

export default {
  getMovieList() {
    return axios.get(`http://localhost:60000/pelicula`).then((list) => {
      return list.data
    });
  },
  getActor() {
    return axios.get(`http://localhost:60000/actor`).then((list) => {
      return list.data
    });
  },
  getMovie(id) {
    return axios.get(`http://localhost:60000/pelicula/${id}`).then((movie) => {
      return movie.data
    });
  },
  getActor(id) {
    return axios.get(`http://localhost:60000/actor/${id}`).then((actor) => {
      return actor.data
    });
  },
}