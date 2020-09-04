import React, { useState, useEffect } from 'react'
import TaskModel from '../models/task';

function NewTask(props) {
  const [taskName, setTaskName] = useState('')
  useEffect(()=> {}, [taskName])
  const handleSubmit = e =>  {
    e.preventDefault()
    TaskModel.create({
      projectId: props.project._id,
      taskName: taskName
    })
  }
  return (
    <div>
      <form onSubmit={ (e) => handleSubmit(e) }>
        taskName: <input type="text" placeholder="Task Name" onChange={ (e)=>setTaskName(e.target.value) }/>
      </form>
    </div>
  )
}

export default NewTask
