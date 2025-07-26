import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, fetchTodosRequest } from './actions/todo.action'
import { useEffect } from 'react'
import { fetchPokemonRequest } from './actions/pokemon.action'

const App = () => {
  const [value1, setValue] = React.useState('')
  const dispatch=useDispatch()
  let data = useSelector((state)=> state)
  console.log(data,"qqqqqqqqqqqq");
  useEffect(() => {
    dispatch(fetchPokemonRequest())}, [dispatch])

    return (
    <div>
      <h1>Pokemon List</h1>
      {data.loading && <p>Loading...</p>}
      {data.error && <p>Error: {data.error}</p>}
      <ul>
        {data.result.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
    )
  
  // return (
  //   <div>TODO
  //     <input type="text" placeholder='Enter Todo' value={value1} onChange={(e)=>setValue(e.target.value)} />
  //     <button onClick={()=>dispatch(addTodo({id:Math.random(),title:value1}))}>Add Todo</button>
  //     <button onClick={() => dispatch(fetchTodosRequest())}>fetch todo</button>
  //     <ul>
  //       {Array.isArray(data.todos) && data.todos.map((todo) => (
  //         <li key={todo.id}>
  //           {todo.title}
  //           <button onClick={() => dispatch({type:'REMOVE_TODO', payload:todo})}>Remove</button>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // )
}

export default App