import React, { useContext } from 'react'
import { DataProvider } from './Store'

const GrandChild = () => {
    let obj = useContext(DataProvider)
    // console.log(obj)
  return (
    <div className='border border-danger p-5 text-center'>
      <h1> I am GrandChild</h1>
      <h1> I have {obj.land}</h1>
      <h1> I have {obj.gold}</h1>
    </div>
  )
}

export default GrandChild
