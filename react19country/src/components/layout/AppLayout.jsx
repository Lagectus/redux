import React from 'react'
import Headers from "./Headers.jsx"
import Footer from "./Footer.jsx"
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    <Headers/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AppLayout