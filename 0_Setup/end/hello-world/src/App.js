import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Clock />
      </div>
    );
  }
}


class Header extends Component {

  render() {
    return (
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      )
  }
}


class Content extends Component {

  render() {
    return (
      <div>
        <h1>State Example</h1>
        <p className="App-intro"> To get started, edit <code>src/App.js</code> and save to reload.</p>
      </div>
      )
  }
}

class Clock extends Component {

  constructor(props) {
    super(props);
    
    this.state = 
      {
        date: new Date(),
        commentCount: 0
      }
  }

  tick () {
    this.setState(
      {
        date: new Date(),
        commentCount: this.state.commentCount + 1
      }
    );
  }

  componentDidMount() {
    this.timeID = setInterval( () => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  render() {
    return (
      <div>
        <h2>The time is: {this.state.date.toLocaleTimeString()} </h2>
        <h3>{this.state.commentCount} seconds</h3>
      </div>
    );
  }

}

export default App;
