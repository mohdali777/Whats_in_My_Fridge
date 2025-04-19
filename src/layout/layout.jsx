import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'


export default function Layout() {
  return (
    <div className='flex items-center flex-col '>
        <nav>
      <Navbar/>
        </nav>
      <Outlet/>
      <footer>
        <h1>footer</h1>
      </footer>
    </div>
  )
}
