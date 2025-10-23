import React from 'react'
import Task from './Task'
import NotFound from './NotFound'

const TaskContainer = ({taskList, handleDelete}) => {
  return (
    <>
      {taskList.length==0? <NotFound/>: 
      <ul className=''>
       {taskList.map((elm,ind)=>( 
        <li className='list-group-item my-2' key={ind}>
            <Task elm={elm} handleDelete={handleDelete} ind={ind} />
        </li>))}
      </ul>
      }
    </>
  )
}

export default TaskContainer
