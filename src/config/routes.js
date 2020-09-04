import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Silo from '../pages/Silo'
import NewProject from '../pages/NewProject'
import ProjectFocus from '../pages/ProjectFocus'
import NewTask from '../pages/NewTask'

export default function Routes (props) {
  return(
  <Switch>
    <Route exact path= '/' component={ Home } />
    <Route path = '/register' component={ Register } />
    <Route path = '/projects'>
      <Silo currentUser = { props.currentUser }/>
    </Route> 
    <Route path = '/projects/new' component={ NewProject } />
    <Route path = '/tasks/new' component={ NewTask} />
    <Route path = '/projects/:id' component={ ProjectFocus } />
    <Route path = '/login' component={ 
      (routeProps) => {
      return <Login
              { ...routeProps }
              storeUser={ props.storeUser }
            />
      }
    } />
    <Route path = '/logout'  />
  </Switch>
  )
}