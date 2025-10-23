import React from 'react'
import AppName from './AppName'
import AddtaskFrame from './AddtaskFrame'
import TaskContainer from './TaskContainer'
import MyStore from './MyStore'

const NoteApp = () => {
  return (
    <MyStore>
      <div className='contauner'>
      <div className="row text-center">
        <div className="col-md-6 mx-auto">
            <AppName/>
            <AddtaskFrame/>
            <TaskContainer/>
        </div>
      </div>
    </div>
    </MyStore>
  );
}

export default NoteApp
