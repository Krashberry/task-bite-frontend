import React from 'react'
import NewTask from '../../pages/NewTask'

export default function ProjectCard(props) {
  const taskList = props.project.projectTasks.map(task => {
    return <li key={ task._id }>{ task.taskName }</li> 
  })  
  return (
    <div>
      <ul>
        <li>
          { props.project.projectName }
        </li>
        <li>
          { taskList }
        </li>
        <li>
          <NewTask />
        </li>
        <button type="submit" onSubmit={ props.project.delete }>
          Delete Project
        </button>
      </ul>
    </div>
  )
}
