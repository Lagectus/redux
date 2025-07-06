import React from 'react'
import { useContext } from 'react';
import MyContext from '../MyContext';
import { useState } from 'react';

const CompD = () => {
    const [input,setInput] = useState('')
    let {todo,setTodo} = useContext(MyContext)
    const addTodo = (data)=>{
        if(input.length){
            setTodo([...todo,data])
            setInput('')
        }

    }
  return (
    <div>
        <i>enter something</i>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <input type="submit" onClick={()=>addTodo(input)}/>
        <button onClick={()=>setTodo([])}>DELETE</button>
        {todo.map((val,i)=><div key={i}>{val}</div>)}
    </div>
  )
}

export default CompD