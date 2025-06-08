import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterConstant from './redux/constants/counterConstant';

const App = () => {
  const dispatch = useDispatch();
  const {count,x} = useSelector(state => state.counter);
  console.log(count);
  

  return (
    <div>{count}
    <button onClick={() => dispatch({type: counterConstant.INCREMENT})}>+</button>
    <button onClick={() => dispatch({type: counterConstant.DECREMENT})}>-</button>
    <button onClick={() => dispatch({type: counterConstant.RESET})}>Reset</button>
    </div>
  )
}

export default App