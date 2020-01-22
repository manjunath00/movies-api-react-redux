const deleteMovieReducer = (deletedMovie = null, action) => {
  switch (action.type) {
    case "DELETE_A_MOVIE":
      return action.payload;
  }

  return deletedMovie;
};

export default deleteMovieReducer;
