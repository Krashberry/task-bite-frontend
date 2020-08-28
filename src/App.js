import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Header from './components/js/SideBar'
import Routes from './config/routes'
import UserModel from './models/user'
import './App.css';

function App(props) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('userName'))

  const storeUser = userId => {
    setCurrentUser({ currentUser: userId })
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
      <Header 
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
