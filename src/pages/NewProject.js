import React, { useState, useEffect } from 'react'
import ProjectModel from '../models/project';

function NewProject(props) {
  const [projectName, setProjectName] = useState('')
  useEffect(()=> {}, [projectName])
  const handleSubmit = e =>  {
    e.preventDefault()
    console.log(props.user)
    ProjectModel.create({
      userId: props.user._id,
      projectName: projectName
    })
  }
  return (
    <div>
      <form onSubmit={ 
        (e) => handleSubmit(e) 
      }>
        New Project: <input 
          type="text" 
          placeholder="Project Title" 
          onChange={ 
            (e)=>setProjectName(e.target.value) 
          }
        />
      </form>
    </div>
  )
}

export default NewProject

