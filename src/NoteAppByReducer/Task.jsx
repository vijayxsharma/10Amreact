import React, { useContext, useState } from 'react'
import { DataProvider } from './MyStore'

const Task = ({elm:{work,workDate}, ind}) => {
const {dispatch} = useContext(DataProvider)
  return (
    <div className='row align-items-center'>
      <div className="col-5">{work}</div>
      <div className="col-5">{workDate}</div>
      <div className="col-2">
        <button className='btn btn-danger px-3'
        onClick={()=>dispatch({type:"delete",payload:ind})}
        >Delete</button>
      </div>
    </div>
  )
}

export default Task
