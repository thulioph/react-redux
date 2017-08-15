import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React + Redux + JSX</h2>
        </div>

        <div className="Todo-App">
          <Message message="DALE PAPAI!" />

          <TodoForm />
          
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
