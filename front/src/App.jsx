import React from 'react'
import { Outlet } from 'react-router'
import {ToastContainer} from "react-toastify"
import Navigation from './pages/auth/Navigation'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <ToastContainer/>
    <Navigation/>
   
    <main>
<Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default App