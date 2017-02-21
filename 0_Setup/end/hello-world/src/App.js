import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Table />
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

class Table extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      data: [
        {
          'id': 1,
          'name': 'Dariusz',
          'age': 10 
        },
        {
          'id': 2,
          'name': 'Mariusz',
          'age': 20 
        },
        {
          'id': 3,
          'name': 'Marek',
          'age': 30 
        }
      ]
    }
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
          </tr>
        </tbody>
      </table>
      )
  }
}


export default App;
