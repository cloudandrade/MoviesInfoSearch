import React, { Component } from 'react'
import {connect } from 'react-redux'

import {fetchMovie} from '../../actions/searchActions'

export class Movie extends Component {

    componentDidMount(){
        this.props.fetchMovie(this.props.match.params.id)
    }
    render() {
        return (
            <React.Fragment>
        <div className="row">
          <div className=" mt-4 col-md-4 card card-body">
            <img src="#movie-poster" className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">Movie Title</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong>Movie Genre
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> Movie Release
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong>Movie Rated
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong>IMDB Rating for the movie
              </li>
              <li className="list-group-item">
                <strong>Director:</strong>Movie Director
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> Movie Writer
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong>Movie Actors
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>
              Movie Plot
              <hr />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on IMDB
              </a>
              <a href="/" className="btn btn-default text-light">
                Go Back To Search
              </a>
            </div>
          </div>
        </div>
        </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,

})

export default connect(mapStateToProps, {fetchMovie})(Movie);
