import React, { memo, useCallback, useMemo } from 'react'

const ButtonComp =memo(({ onClick,children  }) => {
    console.log('ButtonComp Rendered',"childer", children);


    
  return (
    <div>
      <button onClick={onClick}>{children}</button> 
    </div>
  )
})

const Counter = () => {
    const [count, setCount] = React.useState(0);
    const increment =useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    },[]);
    const decrement = useCallback(() => {
        setCount((prevCount) => prevCount - 1)
    },[]);
  return (
    <div>
        <h1>Counter Component</h1>
        <p>Count: {count}</p>
        <ButtonComp onClick={increment}>Increment</ButtonComp>
        <ButtonComp onClick={decrement}>Decrement</ButtonComp>
        <p>Current Count: {count}</p>
    </div>
  )
}

export default Counter