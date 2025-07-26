import React, { memo, use, useMemo } from 'react'

const ExpensiveCal = () => {
    
    const sum = ()=>{
        let i = 0;
        for(i = 0; i<100000000; i++){
           i= i+1;
        }
        return i;
    }

    let total = useMemo(() => sum(), []);
    console.log('ExpensiveCal Rendered : ',total);
  return (
    <div>ExpensiveCal : {total}</div>
  )
}

const MemoParent = ()=>{
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h1>Memo Example</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <ExpensiveCal />
        </div>
    )
}


export default MemoParent