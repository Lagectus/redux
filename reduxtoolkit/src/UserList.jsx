import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './slice/userSlice'

const UserList = () => {
   const dispatch = useDispatch()
   let {loading,user,error}= useSelector((st)=>st.users)
       useEffect(()=>{
    dispatch(fetchUsers())
   },[dispatch])
    
  return (
    <div>UserList
        {loading && <p>loading...</p>}
        {error && <p>{error}</p>}
        {user && (
            <ul>
                {user.map(ur=>(
                    <li>{ur.name}</li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default UserList