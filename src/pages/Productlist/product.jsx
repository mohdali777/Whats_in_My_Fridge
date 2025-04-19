import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeValue } from '../../Redux/slices/testSlice'

export default function Product() {
    const value = useSelector(state => state.test.value)
    const dispath = useDispatch()
  return (
    <div>
        <button onClick={()=>dispath(changeValue())}>Test</button>
      <h1>{value}</h1>
      <h1>product</h1>
    </div>
  )
}
