const initialState = {
    todos: [],
    loading: false,
    error: null
}

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            console.log(action.payload, "Adding todo");
            
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            };
        case 'FETCH_TODOS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_TODOS_SUCCESS':
            return {
                ...state,
                loading: false,
                todos: [...state.todos,...action.payload]
            };
        case 'FETCH_TODOS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}