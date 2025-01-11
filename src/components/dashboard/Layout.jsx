import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from '../dashboard/Sidebar/Sidebar';
import Header from './Header';

const Layout = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-auto'>
      <div className=''>
        <Sidebar/>
        </div>
      <div className='py-4 w-full'>
        <Header/>
        <Outlet/>
        </div>
    </div>
  )
}

export default Layout
