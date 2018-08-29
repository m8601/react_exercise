import React, { Component } from 'react';
import './App.css';

import Banner from './Banner';
import Expertise from './Expertise';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Banner author="Robert Szymanski" position="Junior React Dev"/>
        <Expertise/>
      </div>
    );
  }
}

export default App;
