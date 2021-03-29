import { Button } from '@chakra-ui/button'
import { Box } from '@chakra-ui/layout'
import { useAuthentication } from 'Context/AuthenticationContext'
import React from 'react'
import { useHistory } from 'react-router'

const HomePages = () => {
  const history = useHistory()
  const { logout } = useAuthentication()

  const handleLogout = async () => {
    await logout()
    history.push('/login')
  }

  return (
    <Box padding={16}>
      <Button variant="outline" colorScheme="twitter" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  )
}

export default HomePages
