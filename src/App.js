import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Banner author="Robert Szymanski" position="Junior React Dev"/>
      </div>
    );
  }
}

export default App;
