import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import SideBar from './Sidebar';
import NavFooter from '@/pages/landingpage/NavFooter';
import SideFooter from '@/pages/dashboard/SideFooter';

const MainLayout = () => {
    const location = useLocation();

    
  // Determine whether to show Navbar or Sidebar based on the route
  const showNavbar = ['/teamSub','/about', '/investment', '/team','/contact', '/'].includes(location.pathname) 
  const showSidebar = ['/admin','/dashboard', '/invest', '/withdraw','/analysis', '/transaction','/settings'].includes(location.pathname)
  return (
        <div>
            {showNavbar && <Navbar/>}
            {showSidebar && <SideBar/>}
            <main>
            {showNavbar && <Outlet />}
            </main>
            {showNavbar && <NavFooter/>}
            {showSidebar && <SideFooter/>}
        </div>
    )
}

export default MainLayout
