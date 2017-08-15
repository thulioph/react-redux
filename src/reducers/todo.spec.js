import reducer from './todo';

describe('Todo Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, {type: 'ANYTHING'});
        expect(result).toBeDefined();
    })

    test('adds a todo', () => {
        const startState = {
            todos: [ {id: 1, name: 'A', isComplete: true} ]
        }
        
        const expectState = {
            todos: [ 
                {id: 1, name: 'A', isComplete: true},
                {id: 2, name: 'A', isComplete: false}
            ]
        };

        const action = {
            type: 'TODO_ADD',
            payload: {id: 2, name: 'A', isComplete: false}
        }

        const result = reducer(startState, action);
        expect(result).toEqual(expectState);
    })
});