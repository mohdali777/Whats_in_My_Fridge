import React from 'react'
import logo from '../../assets/logo.png'
import genie from '../../assets/gene.gif'

import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='bg-white w-[100vw] flex flex-row justify-between px-[30px] py-[10px]'>
      <div className='flex'>
       <img className='w-[250px] h-[70px]' src={logo} alt="" />
       <img className='w-[60px] h-[60px] ' src={genie} alt="" />
      </div>
      <div>
      </div>
    </div>
  )
}
