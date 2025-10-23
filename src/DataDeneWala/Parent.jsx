import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div className='border border-danger p-5 text-center'>
      <h1>Parent</h1>
      <Child/>
    </div>
  )
}

export default Parent
