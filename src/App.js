import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div className="Todo-App">
          <form>
            <input type="text"/>
          </form>

          <div className="Todo-List">
            <ul>
              <li>
                <input type="checkbox"/> Create Static UI
                <input type="checkbox"/> Create Initial State
                <input type="checkbox"/> Used State to Render
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
