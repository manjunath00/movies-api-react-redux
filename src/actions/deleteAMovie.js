import moviesapi from "../apis/moviesapi";

import { fetchAllMovies } from "./getAllMovies";

export const deleteAMovie = id => {
  return async function(dispatch, getState) {
    const movie = await moviesapi.delete(`/movies/${id}`);
    // console.log(getState(), movie);
    dispatch({
      type: "DELETE_A_MOVIE",
      payload: movie.data
    });
  };
};


export const deleteAMovieAndUpdate = (id) => {
  return async function (dispatch) {
    await deleteAMovie(id);
     await dispatch(fetchAllMovies());
  }
}