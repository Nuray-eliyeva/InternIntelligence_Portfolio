import React from 'react'
import Navbar from '../Companents/Navbar'
import Footer from '../Companents/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Layout