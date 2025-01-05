import React from 'react'
import { Outlet } from 'react-router'
import {ToastContainer} from "react-toastify"
const App = () => {
  return (
    <>
    <ToastContainer/>
    <main>
<Outlet/>
    </main>
    </>
  )
}

export default App