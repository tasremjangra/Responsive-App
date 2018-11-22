import React, { Component } from 'react';
import './App.css';
import Component_Card from './Component_Card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Component_Card />
        <Component_Card />
        <Component_Card />
        <Component_Card />
      </div>
    );
  }
}

export default App;
