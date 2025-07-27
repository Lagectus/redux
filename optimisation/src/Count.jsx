import React from 'react'
import { memo } from 'react';
import { useRef } from 'react'

const Count = ({count}) => {
    const renderCount = useRef(0);
    console.log(renderCount);
    
  return (
    <div>
        <p>
            nothing changed {renderCount.current++} times
        </p>
        
    </div>
  )
}

export default memo(Count)