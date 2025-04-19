import React from 'react'
import Loading from '../../components/loading/loading'

export default function Home() {
  return (
    <div className='bg-[#325a6a] w-full h-[100vh] relative'>
      <div className='absolute'>
      <Loading/>
      </div>
      <h1>Home</h1>
    </div>
  )
}
