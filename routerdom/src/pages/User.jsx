import React from 'react'
import { useLoaderData } from 'react-router-dom'

const User = () => {
    const user = useLoaderData()
    console.log(user,"wwwwww");
    
  return (
    <div>User
        {user.name}<br></br>
        {user.email}
    </div>
  )
}

export default User