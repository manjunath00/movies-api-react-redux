const selectedMovieReducer = (selectedMovie = null, action) => {
  switch (action.type) {
    case "A_MOVIE":
      return action.payload;
  }

  return selectedMovie;
};

export default selectedMovieReducer;
