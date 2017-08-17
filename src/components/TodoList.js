import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodos, toggleTodo, deleteTodo, getVisibleTodos} from '../reducers/todo';

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => (
    <li>
        <input 
            type="checkbox" 
            defaultChecked={isComplete} 
            onChange={() => toggleTodo(id)}
        />

        {name}

        <span className="delete-item">
            <button onClick={() => deleteTodo(id)}>X</button>
        </span>
    </li>
)

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        return(
            <div className="Todo-List">
                <ul>
                    {this.props.todos.map(todo => 
                        <TodoItem 
                            {...todo} 
                            key={todo.id} 
                            deleteTodo={this.props.deleteTodo}
                            toggleTodo={this.props.toggleTodo} 
                        />
                    )}
                </ul>
            </div>
        )
    }    
} 

export default connect(
    (state, ownProps) => ({todos: getVisibleTodos(state.todo.todos, ownProps.filter)}),
    {fetchTodos, toggleTodo, deleteTodo}
)(TodoList);