import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Silo from '../pages/Silo'
import NewProject from '../pages/NewProject'
import ProjectFocus from '../pages/ProjectFocus'

export default (props) => (
  <Switch>
    <Route exact path= '/' component={ Home } />
    <Route exact = '/' component={ Register } />
    <Route exact = '/' component={ Silo } />
    <Route exact = '/' component={ NewProject } />
    <Route exact = '/' component={ ProjectFocus } />
    <Route exact = '/login' component={ 
      (routeProps) => {
      return <Login
              { ...routeProps }
              storeUser={ props.storeUser }
            />
      } 
    } />

  </Switch>
)