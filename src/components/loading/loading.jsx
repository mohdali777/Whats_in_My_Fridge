import React from 'react'
import cooking from '../../assets/cooking.gif'

export default function Loading() {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center bg-gray-500'>
        <div>
        <img className='w-[90px]' src={cooking} alt="" />
        </div>
    </div>
  )
}
