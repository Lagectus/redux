import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import Contact from "./pages/Contact.jsx"
import { Country } from "./pages/Country.jsx"
import CountryDetails from "./pages/CountryDetails.jsx"
import AppLayout from "./components/layout/AppLayout.jsx"
import "./app.css"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },

        {
          path: "/about",
          element: <AboutPage />

        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/country",
          element: <Country />
        },
        {
          path: "/country/:id",
          element: <CountryDetails />
        }]
    },

  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App