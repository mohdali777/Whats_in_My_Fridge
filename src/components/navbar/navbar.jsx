import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <div>
       <img src={logo} alt="" />
       <li><Link to="/">Home</Link></li>
        <li><Link to="/product">product</Link></li>    
      </div>
      <div>

      </div>
    </div>
  )
}
