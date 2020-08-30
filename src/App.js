import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'
import UserModel from './models/user'
import ProjectModel from './models/project'
import SideBar from './components/js/SideBar'
import './App.css';

function App(props) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('userName'))
  const [project, setProjects] = useState([])
  // const [tasks, setTasks] =useState([])

  const storeUser = (userId, projects) => {
    setCurrentUser({ currentUser: userId })
    setProjects(projects)
    setTasks(tasks)
    localStorage.setItem('userName', userId)
  }

  const logout = event => {
    event.preventDefault()

    localStorage.removeItem('userName')
    UserModel.logout()
      .then(data => {
        console.log(data)
        setCurrentUser(null)
        props.history.push('/')
      })
  }

  return (
    <div className="App">
      <SideBar 
        currentUser={ currentUser } 
        logout={ logout }
      />
      <Routes 
        currentUser={ currentUser }
        storeUser={ storeUser }
      />
    </div>
  );
}

export default withRouter(App)
