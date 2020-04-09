import React, { Component } from 'react';
import './App.css';

import { Header } from '../src/JS/Components/Header'
import { Footer } from '../src/JS/Components/Footer.js'
import HeaderNav from './JS/Pages/HeaderNavigation';
import LandScore from './JS/Pages/LandScore'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HeaderNav />         */}
        <Header/>
        <LandScore />
        <Footer/>
      </div>
    );
  }
}
export default App;


