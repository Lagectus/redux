import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
import AboutPage from "./pages/AboutPage.jsx"
import Country from "./pages/Country.jsx"
import CountryDetails from "./components/CountryDetails.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import Applayout from "./pages/Applayout.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"
import "./app.css"

const App = () => {
  const router = createBrowserRouter(
    [{
    path:"/",
    element:<Applayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element: <HomePage/>
      },
      {
    path:"/about",
    element: <AboutPage/>
  },
  {
    path:"/country",
    element: <Country/>
  },
  {
    path:"/country/:id",
    element:<CountryDetails/>
  },
  {
    path:"contact",
    element:<ContactPage/>
  }]
  },
  
]
)
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App