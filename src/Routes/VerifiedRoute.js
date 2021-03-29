import { Box } from '@chakra-ui/layout'
import CartModal from 'Containers/Cart/CartModal'
import TopBar from 'Containers/Navigation/TopBar/TopBar'
import { useAuthentication } from 'Context/AuthenticationContext'
import { useCart } from 'Context/CartContext'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { CartProvider } from 'Context/CartContext'

const HocVerifiedRoute = (props) => {
  return (
    <CartProvider>
      <VerifiedRoute {...props} />
    </CartProvider>
  )
}

const VerifiedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuthentication()
  const { cartModalActive, setCartModalActive } = useCart()

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
              <CartModal
                isOpen={cartModalActive}
                onClose={() => setCartModalActive(false)}
              />
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

export default HocVerifiedRoute
