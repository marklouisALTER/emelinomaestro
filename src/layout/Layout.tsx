import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'
import { Announcement } from '../components/Announcement/announcement'
const Layout:React.FC = () => {
  return (
    <>
        <Announcement />
        <Navbar />
        <Outlet />
    </>
  )
}

export default Layout