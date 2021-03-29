import { useAuthentication } from 'Context/AuthenticationContext'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const VerifiedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuthentication()

  return (
    <Route
      {...rest}
      render={(props) => {
        if (currentUser) {
          return <Component {...props} />
        } else {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          )
        }
      }}
    />
  )
}

export default VerifiedRoute
