import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, fetchTodosRequest } from './actions/todo.action'

const App = () => {
  const [value1, setValue] = React.useState('')
  const dispatch=useDispatch()
  let data = useSelector((state)=> state.todo)
  console.log(data);
  
  return (
    <div>TODO
      <input type="text" placeholder='Enter Todo' value={value1} onChange={(e)=>setValue(e.target.value)} />
      <button onClick={()=>dispatch(addTodo({id:Math.random(),title:value1}))}>Add Todo</button>
      <button onClick={() => dispatch(fetchTodosRequest())}>fetch todo</button>
      <ul>
        {Array.isArray(data.todos) && data.todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => dispatch({type:'REMOVE_TODO', payload:todo})}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App