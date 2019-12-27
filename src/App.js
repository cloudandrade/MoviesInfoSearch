import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';

import Movie from './components/home/Movie'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import store from './store';

class App extends Component {
  render ( ){
    return (
      <Provider store={store}>
        <Router>
       
            <Navbar></Navbar>
            <Route exacly path="/" component={Landing} />
            <Route  exacly path="/movie/:id" component={Movie} />
            <Redirect path="**" to="/" />
            <Footer></Footer>
          
      </Router>
      </Provider>
    )
  };
}

export default App;
