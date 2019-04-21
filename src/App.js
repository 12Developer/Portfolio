import React, { Component } from 'react';

import './App.css';
import NavBar from './NavBar.js';
import Section from './Section.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Section/>
      </div>
    );
  }
}

export default App;
