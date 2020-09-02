import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'
import UserModel from './models/user'
import SideBar from './components/js/SideBar'
import './App.css';

function App(props) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('currentUser')))

  const storeUser = (user) => {
    setCurrentUser({ currentUser: user })
    localStorage.setItem('currentUser', JSON.stringify(user))
  }

  const logout = event => {
    event.preventDefault()
    console.log("logging out")

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
