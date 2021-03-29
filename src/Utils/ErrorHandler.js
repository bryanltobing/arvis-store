import { createStandaloneToast } from '@chakra-ui/toast'

const toast = createStandaloneToast()
const ErrorHandler = (code, payload) => {
  let title = 'An error occurred'
  let description = ''
  let status = 'error'
  let duration = 7000
  let isClosable = true
  let position = 'top-right'

  switch (code) {
    case 'auth/wrong-password':
      description = 'Invalid Email or Password'
      break
    case 'auth/user-not-found':
      description = 'User not found'
      break
    case 'auth/weak-password':
      description = payload
      break
    case 'auth/email-already-in-use':
      description = payload
      break
    default:
      break
  }

  toast({
    title,
    description,
    status,
    duration,
    isClosable,
    position,
  })
}

export default ErrorHandler
