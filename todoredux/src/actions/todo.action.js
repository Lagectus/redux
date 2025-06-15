
export const addTodo = (todo) => {
    console.log(todo,"fffffff");
    
    return {
        type: 'ADD_TODO',
        payload: todo
    };
}

export const removeTodo = (todo) => {
    return {
        type: 'REMOVE_TODO',
        payload: todo
    };
}

export const fetchTodosRequest = () => async(dispatch)=>{
    dispatch({ type: 'FETCH_TODOS_REQUEST' });
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        console.log(data);
        
        dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: data.slice(0, 10) }); // Fetching only the first 10 todos for simplicity
    } catch (error) {
        dispatch({ type: 'FETCH_TODOS_FAILURE', payload: error.message });
    }

}