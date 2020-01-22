import { combineReducers } from 'redux';

// all reducers
import { moviesReducer } from './moviesReducer';
import selectedMovieReducer from './selectedMovieReducer';
import deleteMovieReducer from './deleteMovieReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  SelectedMovie: selectedMovieReducer,
  deletedMovie : deleteMovieReducer
});

export default rootReducer;