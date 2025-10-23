import React, {useState} from 'react'

const AddtaskFrame = ({HandleAdd,task,setTask}) => {

  const {work, workDate} = task
  return (
    <div className='row d-flex justify-content-center'>
      <div className="col-5">
        <input 
        type="text" 
        className='form-control' 
        name="work"
        value={work}
        onChange={(e)=>setTask({...task,[e.target.name]:e.target.value})} />
      </div>
      <div className="col-5">
        <input 
        type="date" 
        className='form-control' 
        name="workDate"
        value={workDate}
        onChange={(e)=>setTask({...task,[e.target.name]:e.target.value})} />
      </div>
      <div className="col-2 text-center">
        <button className='btn btn-success px-4' onClick={HandleAdd}>Add</button>
      </div>
    </div>
  )
}

export default AddtaskFrame
