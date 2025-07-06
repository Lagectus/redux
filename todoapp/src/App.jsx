import React, { useState } from 'react';
import { useAddTaskMutation, useGetTasksQuery } from './apiSlice';

function App() {
  const [task, setTask] = useState('');
  const { isLoading, isError, data, error, refetch } = useGetTasksQuery();
  const [addTask] = useAddTaskMutation();

  const handleAdd = async () => {
    if (task.trim() === '') return;

    await addTask({
      title: task,
      completed: false,
      userId: 1,
    });

    setTask('');
    refetch(); // ⬅ Refresh the list
  };

  const deleteTodo = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    });
    // refetch(); // ⬅ Refresh after deletion too
  };

  return (
    <div className="app">
      <h1>To-Do App with Fake API + RTK Query</h1>

      <div className="input-group">
        <input
          type="text"
          value={task}
          placeholder="Add a task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {isLoading ? (
        <p>Loading todos...</p>
      ) : isError ? (
        <p>{error.error}</p>
      ) : (
        <ul>
          {data.map((todo) => (
            <li key={todo.id}>
              <span>{todo.title}</span>
              <button className="delete" onClick={() => deleteTodo(todo.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
