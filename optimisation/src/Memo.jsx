import React from 'react'
import { useState } from 'react';
import Count from './Count';

const ReactMemo = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>React Memo Example</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Count />
    </div>
  )
}

export default ReactMemo