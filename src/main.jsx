import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route } from 'react-router-dom'
import { createBrowserRouter , createRoutesFromElements , RouterProvider } from 'react-router-dom'
import Hero from './Components/Hero/Hero.jsx'
import Mercury from './Components/Mercury/Mercury.jsx'
import Venus from './Components/Venus/Venus.jsx'
import Earth from './Components/Earth/Earth.jsx'
import Mars from './Components/Mars/Mars.jsx'
import Layout from './Layout.jsx'
import Sun from './Components/Sun/Sun.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='/' element = {<Hero />} />
      <Route path='Mercury' element = {<Mercury />} />
      <Route path='Venus' element = {<Venus />} />
      <Route path='Earth' element = {<Earth/>} />
      <Route path='Mars' element = {<Mars />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
