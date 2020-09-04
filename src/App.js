import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'
import UserModel from './models/user'
import SideBar from './components/js/SideBar'
import './components/scss/Main.scss'
import './App.css';

function App(props) {
  const [currentUser, setCurrentUser] = useState(
    (localStorage.getItem('currentUser')))
  // const [currentUser, setCurrentUser] = useState({
  //   username: "james",
  //   password: "password1",
  //   _id: "5f502212392abe1d320a5e5d"
  // })

  const storeUser = (user) => {
    console.log(user)
    setCurrentUser({ currentUser: user })
    localStorage.setItem('currentUser', user)
  }

  const logout = event => {
    event.preventDefault()
    console.log("logging out")

    localStorage.removeItem('currentUser')
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
