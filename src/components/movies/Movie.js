import React, { Component } from "react";
import { connect } from "react-redux";

// components
import { fetchAllMovies } from "../../actions/getAllMovies";
import { fetchAMovie } from "../../actions/getAMovie";
import { deleteAMovie } from "../../actions/deleteAMovie";

// deleteAMovieAndUpdate
import { deleteAMovieAndUpdate } from "../../actions/deleteAMovie";


class Movie extends Component {
  componentDidMount() {
    // console.log(this.props);
  }

  deleteTheMovie = (id) => {
    this.props.deleteAMovie(id)
    // this.props.deleteAMovieAndUpdate(id);
    // this.props.fetchAllMovies();
  };
  render() {
    const {
      id,
      Title,
      Description,
      Runtime,
      Genre,
      Rating,
      Metascore,
      Votes,
      Gross_Earning_in_Mil,
      Actor,
      Year
    } = this.props.singleMovie;
    return (
      <div>
        <div className="movie-container">
          <div>
            <div>
              <strong>Title : </strong>
              {Title}
            </div>
            <div>
              <strong>Description : </strong>
              {Description}
            </div>
            <div>
              <strong>Runtime: </strong>
              {Runtime}
            </div>
            <div>
              <strong>Genre: </strong>
              {Genre}
            </div>
            <div>
              <strong>Rating: </strong>
              {Rating}
            </div>
            <div>
              <strong>Metascore: </strong>
              {Metascore}
            </div>
            <div>
              <strong>Votes: </strong>
              {Votes}
            </div>
            <div>
              <strong>Gross_Earning_in_Mil: </strong>
              {Gross_Earning_in_Mil}
            </div>
            <div>
              <strong>Actor: </strong>
              {Actor}
            </div>
            <div>
              <strong>Year: </strong>
              {Year}
            </div>
          </div>
          <div className="flex">
            <div>
              <button onClick={() => this.props.fetchAMovie(id)}>Edit</button>
            </div>
            <div>
              <button onClick={() => this.deleteTheMovie(id)}>&times;</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movie: state.selectedMovie };
};

export default connect(mapStateToProps, {
  fetchAMovie,
  deleteAMovie,
  fetchAllMovies
})(Movie);
