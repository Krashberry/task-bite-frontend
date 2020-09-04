import React from 'react'

export default function ProjectCard(props) {
  const taskList = props.project.projectTasks.map(task => {
    return <li key={ task._id }>{ task.taskName }</li> 
  })  
  return (
    <div>
      <div>{ props.project.projectName }</div>
      <ul>{ taskList }</ul>
      <button>Delete Project</button>
    </div>
  )
}
