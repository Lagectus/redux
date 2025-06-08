import React, { use, useEffect, useState } from 'react'

const UserFetcher = () => {
    const [userId,setUserId] = useState(1);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        console.log("COMPONENT MOUNTED");
        const interval = setInterval(() => {
           console.log('interval running');
           setUserId(pre => pre < 10 ? pre + 1 : 1);
           
        }, 2000);
        return () => {
            console.log("COMPONENT UNMOUNTED");
            clearInterval(interval);
            console.log("interval cleared",interval);
        }
    },[])

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await response.json();
            setUserData(data);
        };

        fetchUser();
    },[userId])
  return (
    <div>
      <h1>User Fetcher</h1>
      <button onClick={() => setUserId(pre=>pre<10? pre+1 : 1)}>Next User</button>
      {userData ? (
        <div>
          <h2>{userData.name}</h2>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  )
}

export default UserFetcher