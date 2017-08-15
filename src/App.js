import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import {bindActionCreators} from 'redux';
import {updateCurrent} from './reducers/todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React + Redux + JSX</h2>
        </div>

        <div className="Todo-App">
          <TodoForm 
            currentTodo={this.props.currentTodo} 
            changeCurrent={this.props.updateCurrent} 
          />

          <TodoList 
            todos={this.props.todos} 
          />
        </div>
      </div>
    );
  }
}

// export default App;
const mapStateProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators({updateCurrent}, dispatch);
const ConnectedApp = connect(mapStateProps, mapDispatchToProps)(App);
export default ConnectedApp;
