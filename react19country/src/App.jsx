import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Importing
import HomePage from './pages/HomePage.jsx';
import AboutPage from "./pages/aboutPage.jsx"
import CountryPage from "./pages/Country.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"
import CountryDetail from "./components/CountryDetail.jsx" 
import Contact from "./pages/Contact.jsx"
import AppLayout from "./components/layout/AppLayout.jsx"
import "./app.css"
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children:[
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: 'about',
    element: <AboutPage/>
  },
  {
    path: 'country',
    element: <CountryPage/>
  },
  {
    path: 'country/:countryName',
    element: <CountryDetail/>
  },
  {
    path:"contact",
    element: <Contact/>
  }
]
  }
])
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
export default App