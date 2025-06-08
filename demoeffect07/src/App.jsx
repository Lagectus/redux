import React, { useState } from 'react'
import UserFetcher from './UserFetcher';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Demo Effect 07</h1>
      <button onClick={() => setShow(pre => !pre)}>
        {show ? "Hide" : "Show"} User Fetcher
      </button>
      {show && <UserFetcher/>}
    </div>
  )
}

export default App