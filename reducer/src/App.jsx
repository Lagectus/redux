import React from 'react'
import { useReducer } from 'react'
import Product from './Product'

const App = () => {
  const initialState = { count: 0 }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1 }
      case 'reset':
        return { count: 0 }
      case 'update_by_value':
        return { count: state.count + action.payload }
      case 'update_by_value2':
        return { count: state.count - action.payload }
      default:
        return state;
    }
  }
  let [state,dispatch]= useReducer(reducer,initialState);
  console.log(state);
  
  return (
    <Product/>
    // <div>count{state?.count}
    // <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    // <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    // <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    // <button onClick={() => dispatch({ type: 'update_by_value', payload: 5 })}>Update by 5</button>
    // <button onClick={() => dispatch({ type: 'update_by_value2', payload: 7 })}>Update by -7</button>
    // </div>

  )
}

export default App