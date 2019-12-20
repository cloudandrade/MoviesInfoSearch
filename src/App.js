import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import {HashRouter as Router} from 'react-router-dom'

import store from './store';

class App extends Component {
  render ( ){
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar></Navbar>
            <Landing></Landing>
            <Footer></Footer>
          </div>
      </Router>
      </Provider>
    )
  };
}

export default App;
