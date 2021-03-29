import React from 'react'
import { Switch, Route } from 'react-router'
import loadable from '@loadable/component'

const RegisterPageLoad = loadable(() => import('Pages/Register/RegisterPages'))
const LoginPageLoad = loadable(() => import('Pages/Login/LoginPages'))

const Routes = () => {
  return (
    <Switch>
      <Route path="/register" component={RegisterPageLoad} />
      <Route path="/login" component={LoginPageLoad} />
    </Switch>
  )
}

export default Routes
