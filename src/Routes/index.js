import React from 'react'
import { Switch } from 'react-router'
import loadable from '@loadable/component'
import VerifiedRoute from './VerifiedRoute'
import PublicRoute from './PublicRoute'

const RegisterPageLoad = loadable(() => import('Pages/Register/RegisterPages'))
const LoginPageLoad = loadable(() => import('Pages/Login/LoginPages'))
const HomePageLoad = loadable(() => import('Pages/Home/HomePages'))
const ProductPageLoad = loadable(() => import('Pages/Product/ProductPages'))

const Routes = () => {
  return (
    <Switch>
      <VerifiedRoute path="/" exact component={HomePageLoad} />
      <VerifiedRoute path="/product/:id" exact component={ProductPageLoad} />
      <PublicRoute path="/register" component={RegisterPageLoad} />
      <PublicRoute path="/login" component={LoginPageLoad} />
    </Switch>
  )
}

export default Routes
