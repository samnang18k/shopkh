import React from 'react'
import Navbar from '../components/Navbar'
import TopBar from '../components/TopBar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <TopBar />
    <Navbar />
    <main>
       <Outlet />
    </main>
    </>
  )
}

export default MainLayout