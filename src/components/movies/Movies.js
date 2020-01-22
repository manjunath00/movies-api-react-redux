import React, { Component } from "react";
import { connect } from "react-redux";

// custom functions
import { fetchAllMovies } from "../../actions/getAllMovies";
import Movie from "./Movie";

class Movies extends Component {
  componentDidMount() {

    // reload only when deleted movie is not null
    // reload only when movies is null
    // if (this.props.reload || (this.props.movies.length === 0)) {
    this.props.fetchAllMovies();
    // }

    console.log(this.props);
  }
  render() {
    return this.props.movies.map(movie => (
      <Movie singleMovie={movie} key={movie.id} />
    ));
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    movies: state.movies,
    reload: (state.deletedMovie === null) ? false : true
  };
};

export default connect(mapStateToProps, { fetchAllMovies })(Movies);
