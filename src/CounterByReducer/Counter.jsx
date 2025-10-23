import React, { useContext, useState } from 'react'
import { DataProvider } from '../store/Store'

const Counter = () => {
  const {state,dispatch} = useContext(DataProvider);
  const {count,method}=state
       

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h1>
            <span className='text-warning'>Counter</span>App
          </h1>
          <h1>Count: {count}</h1>
          <h1>Method: {method}</h1>
          <div>
            <button className='btn btn-primary me-2' onClick={()=>dispatch({type:"increment"})}>
              Increment
            </button>
            <button className='btn btn-danger me-2' onClick={()=>dispatch({type:"decrement"})}>
              Decrement
            </button>
            <button className='btn btn-secondary' onClick={()=>dispatch({type:"reset"})}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter
