import moviesapi from "../apis/moviesapi";

export const fetchAMovie = id => {
  return async function(dispatch, getState) {
    const movie = await moviesapi.get(`/movies/${id}`);
    dispatch({
      type: "A_MOVIE",
      payload: movie.data
    });
  };
};
