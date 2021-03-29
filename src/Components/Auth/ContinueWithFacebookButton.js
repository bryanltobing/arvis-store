import { Button } from '@chakra-ui/button'
import { useAuthentication } from 'Context/AuthenticationContext'
import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { useHistory } from 'react-router'
import { fontSizes } from 'Token/Token'

const ContinueWithFacebookButton = ({ setIsLoading }) => {
  const { authWithFacebook } = useAuthentication()
  const history = useHistory()

  const handleFacebookLogin = async () => {
    try {
      setIsLoading(true)
      await authWithFacebook()
      history.push('/')
    } catch (err) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      boxShadow="md"
      colorScheme="facebook"
      leftIcon={<FaFacebookSquare />}
      fontSize={fontSizes.Button}
      onClick={handleFacebookLogin}
    >
      Continue with Facebook
    </Button>
  )
}

export default ContinueWithFacebookButton
