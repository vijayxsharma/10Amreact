import React, { useContext } from 'react'
import Task from './Task'
import NotFound from './NotFound'
import { DataProvider } from './MyStore'

const TaskContainer = () => {
  const {state:{taskList}} = useContext(DataProvider)
  return (
    <>
      {taskList.length==0? <NotFound/>: 
      <ul className=''>
       {taskList.map((elm,ind)=>( 
        <li className='list-group-item my-2' key={ind}>
            <Task elm={elm} ind={ind} />
        </li>))}
      </ul>
      }
    </>
  )
}

export default TaskContainer
