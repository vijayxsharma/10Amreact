import React, { useState } from 'react'
import AppName from './AppName'
import AddtaskFrame from './AddtaskFrame'
import TaskContainer from './TaskContainer'

const NoteApp = () => {
  const [taskList, setTaskList] = useState([
    {work: "Tere ghar aunga",workDate: "12/12/2025"}, 
    {work: "Tere ghar nachunga", workDate: "12/12/2026"},
  ])

  const [task,setTask] = useState({
    work: "",
    workDate: "",
  });

  const HandleAdd=()=>{
      setTaskList([...taskList,task])
      setTask({
      work: "",
      workDate: "",
  });
  }

  const handleDelete = (id)=>{
    const isDelete = confirm("Are you sure to delete this..")
    if(isDelete){
      const afterDelete = taskList.filter((Element,ind)=>ind!=id)
    setTaskList(afterDelete);
    }
    
  }

  return (
    <div>
      <div className="container">
        <div className="row border">
            <div className="col-10 mx-auto text-center">
                <AppName/>
                <AddtaskFrame HandleAdd={HandleAdd} task={task} setTask={setTask}/>
                <TaskContainer taskList={taskList} handleDelete={handleDelete} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default NoteApp
