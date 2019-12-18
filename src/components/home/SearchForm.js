import React, { Component } from 'react'

import {connect} from 'react-redux'

import {searchMovie} from '../../actions/searchActions'

export class SearchForm extends Component {

    onChange = e => {
    this.props.searchMovie(e.target.value);    
    }

    render() {
        return (
           
                <div className="jumbotron jumbotron-fluid mt-5 text-center">
                    <div className="container">
                        <h1 className="display-4 mb-3">
                            <i className="fa fa-search mr-3" />Search for a Movie or Tv Serie
                        </h1>
                       <form>
                           <div >
                              <input type="text" className="form-control Input-text" name="searchText" placeholder="Search for a Movie or Serie"
                              onChange={this.onChange} />
                              <button type="submit" class="btn btn-primary  ml-3 ">Search</button>
                           </div>
                         
                       </form>
                       
                        <p className="lead">This is a Aplication based on OMDB API</p>
                    </div>
                </div>
     
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.text
})

export default connect(mapStateToProps, {searchMovie})(SearchForm)
