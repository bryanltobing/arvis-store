import React from 'react'
import { Switch, Route } from 'react-router'
import loadable from '@loadable/component'
import VerifiedRoute from './VerifiedRoute'

const RegisterPageLoad = loadable(() => import('Pages/Register/RegisterPages'))
const LoginPageLoad = loadable(() => import('Pages/Login/LoginPages'))
const HomePageLoad = loadable(() => import('Pages/Home/HomePages'))

const Routes = () => {
  return (
    <Switch>
      <VerifiedRoute path="/" exact component={HomePageLoad} />
      <Route path="/register" component={RegisterPageLoad} />
      <Route path="/login" component={LoginPageLoad} />
    </Switch>
  )
}

export default Routes
