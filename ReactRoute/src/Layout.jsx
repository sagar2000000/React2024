import React from 'react'
import Header from './Components/header/Header'
import Footer from './Components/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout(){
  return(

    <>
    <Header/> 
    <Outlet/>
    <Footer/>  
    </>
  )
}
export default Layout