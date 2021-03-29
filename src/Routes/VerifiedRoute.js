import { Box } from '@chakra-ui/layout'
import TopBar from 'Containers/Navigation/TopBar/TopBar'
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
          return (
            <>
              <TopBar />
              <Box padding={{ base: 8, sm: 10, md: 16 }}>
                <Component {...props} />
              </Box>
            </>
          )
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
