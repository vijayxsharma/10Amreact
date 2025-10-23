import React from 'react'
import GrandChild from './GrandChild'

const Child = () => {
  return (
    <div className='border border-danger p-5 text-center'>
      <h1>Child</h1>
      <GrandChild/>
    </div>
  )
}

export default Child
