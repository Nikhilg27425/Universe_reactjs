import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sun from './Components/Sun/Sun'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Mercury from './Components/Mercury/Mercury'
import Venus from './Components/Venus/Venus'
import Earth from './Components/Earth/Earth'
import Mars from './Components/Mars/Mars'
import Jupiter from './Components/Jupiter/Jupiter'
import Saturn from './Components/Saturn/Saturn'
import Uranus from './Components/Uranus/Uranus'
import Neptune from './Components/Neptune/Neptune'


function Layout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Sun/>
        <Mercury/>
        <Venus/>
        <Earth/>
        <Mars/>
        <Jupiter/> 
        <Saturn/>
        <Uranus/>
        <Neptune/>
        <Footer/>
    </>
  )
}

export default Layout
