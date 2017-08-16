import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCurrent, saveTodo} from '../reducers/todo';

class TodoForm extends Component {
    handleInputChange = (evt) => {
        const val = evt.target.value;
        this.props.updateCurrent(val);
    }

    handleSubsmit = (evt) => {
        evt.preventDefault();
        this.props.saveTodo(this.props.currentTodo);
    }

    render() {
        console.warn('TodoForm rendering.');
        const {currentTodo} = this.props;

        return (
            <form onSubmit={this.handleSubsmit}>
                <input 
                    type="text" 
                    onChange={this.handleInputChange}
                    value={currentTodo}
                />
            </form>
        )
    }
}

export default connect(
    (state) => ({currentTodo: state.todo.currentTodo}),
    {updateCurrent, saveTodo}
)(TodoForm);