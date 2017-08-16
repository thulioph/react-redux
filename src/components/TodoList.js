import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodos, toggleTodo} from '../reducers/todo';

const TodoItem = ({id, name, isComplete, toggleTodo}) => (
    <li>
        <input 
            type="checkbox" 
            defaultChecked={isComplete} 
            onChange={() => toggleTodo(id)}
        />

        {name}
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
                            key={todo.id} 
                            {...todo} 
                            toggleTodo={this.props.toggleTodo} 
                        />
                    )}
                </ul>
            </div>
        )
    }    
} 

export default connect(
    (state) => ({todos: state.todo.todos}),
    {fetchTodos, toggleTodo}
)(TodoList);