import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

import Registration from '../components/Registration/Registration.jsx'
import About from '../components/About/About.jsx'
function Layout() {
  return (
    <>
     <Header/>         
     
     <Outlet/> 

     <Footer/>


    </>
  )
}

export default Layout
