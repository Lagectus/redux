import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, getData } from '../redux/actions'

const Counter = () => {
    const count = useSelector((state) => state)
    const dispatch = useDispatch()
    console.log('Count:', count);

    useEffect(()=>{
        dispatch(getData())
    },[dispatch])
    
  return (
    <>
    {count.data && count.data.length > 0 && (
      <div>
        <h2>Data Fetched:</h2>
        <ul>
          {count.data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    )}
    <div>Counter: {count.count}</div>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </>
  )
}

export default Counter