import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: 'Hello world'
    }
  }

  updateTheState() {
    if (this.state.text == 'Hello World') {
      this.setState({
        text: 'Hello Pakistan'
      })
    } else {
      this.setState({
        text: 'Hello World'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 onClick={() => this.updateTheState()} className="App-title">{this.state.text}</h1>
        </header>

        <p>{"onClick={this.myFunc}"}</p>
        <p>
          In this Situation, we cannot using parameter and not intialize "this" keyword by calling function
        </p>

        <p>{"onClick={() => this.myFunc()}"}</p>
        <p>
          In this Situation, we are using arrow function and ww can also use parameters and initialize 'this' keyword too.
        </p>

        <p>{"onClick={this.myFunc.bind(this}}"}</p>
        <p>
          This Situation is same as 2nd one but here is on difference we are using bind property for initilize "this" keyword.
        </p>

      </div>
    );
  }
}

export default App;
