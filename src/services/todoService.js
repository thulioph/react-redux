const API_URL = 'http://localhost:8080/todos';

export const getTodos = () => {
    return fetch(API_URL)
        .then(res => res.json())
}