import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'


export default function Layout() {
  return (
    <div>
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
