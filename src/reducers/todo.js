const initState = {
    todos: [
        { id: 1, name: 'AAA', isComplete: true }
    ]
};

export default (state = initState, action) => {
    switch(action.type) {
        case 'TODO_ADD':
            return {...state, todos: state.todos.concat(action.payload)}
        default:
            return state;
    }
}