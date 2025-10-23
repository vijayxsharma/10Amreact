import React, {useContext, useState} from 'react'
import { DataProvider } from './MyStore'

const AddtaskFrame = () => {
  const {state:{task},dispatch} = useContext(DataProvider)
  let {work, workDate} = task
  // const {work, workDate} = task
  return (
    <div className='row d-flex justify-content-center'>
      <div className="col-5">
        <input 
        type="text" 
        className='form-control' 
        name="work"
        value={work}
        onChange={(e)=>dispatch({type:"task",payload:{...task,[e.target.name]:e.target.value}})} 
        />
      </div>
      <div className="col-5">
        <input 
        type="datetime-local" 
        className='form-control' 
        name="workDate"
        value={workDate}
        onChange={(e)=>dispatch({type:"task",payload:{...task,[e.target.name]:e.target.value},})}
       />
      </div>
      <div className="col-2 text-center">
        <button className='btn btn-success px-4' 
        onClick={()=>dispatch({type:"addTask",payload:task})}
        >Add</button>
      </div>
    </div>
  )
}

export default AddtaskFrame
