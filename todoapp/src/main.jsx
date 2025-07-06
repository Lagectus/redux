import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ApiProvider} from "@reduxjs/toolkit/query/react"
import './index.css'
import App from './App.jsx'
import { api } from './apiSlice.js'

createRoot(document.getElementById('root')).render(
  <ApiProvider api={api}>
    <App />
  </ApiProvider>,
)
