import React from 'react'
import CompA from './components/CompA'
import MyContext from './MyContext'
import { useState } from 'react'

const App = () => {
  const [todo,setTodo] = useState([])
  let data = [{
    name: "aa",
    age: 12
  },
  {
    name: "aa",
    age: 12
  },
  {
    name: "aa",
    age: 12
  },
  {
    name: "aa",
    age: 12
  }]
  return (
    <MyContext.Provider value={{todo,setTodo}}>
    <div><CompA /></div>
    </MyContext.Provider>
  )
}

export default App