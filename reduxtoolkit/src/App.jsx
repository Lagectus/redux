import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './slice/counterSlice';
import UserList from './UserList';
import { fetchUsers } from './slice/userSlice';

const App = () => {
  const dispatch = useDispatch();
   let value =useSelector((state)=>state.counter.value);
   const[amount,setAmount]= useState(0)

   

  return (
    <div>
      {value}
      <button onClick={()=>dispatch(increment())}>inc</button>
      <input onChange={(e)=>setAmount(Number(e.target.value))}></input>
      <button onClick={()=>dispatch(decrement(amount))}>dec</button>
      <UserList/>

    </div>
  )
}

export default App

