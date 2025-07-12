import React from 'react'
import { useLoaderData, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    let data= useRouteError()
    
    console.log(data, "error data");
    
  return (
    <div>{data.message}</div>
  )
}

export default ErrorPage