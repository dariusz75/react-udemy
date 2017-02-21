import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}


class Header extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      headerText: "This text comes from Header Component State"
    }
  }

  render() {
    return (
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <p>{this.state.headerText}</p>
        </div>
      )
  }
}


class Content extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      contentText: "This text comes from Content Component State"
    }
  }

  render() {
    return (
      <div>
        <h1>State Example</h1>
        <p className="App-intro"> To get started, edit <code>src/App.js</code> and save to reload.</p>
        <h2>{this.state.contentText}</h2>
      </div>
      )
  }
}


export default App;
