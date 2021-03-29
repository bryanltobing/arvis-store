import { Button } from '@chakra-ui/button'
import { Center, Divider, Heading, Stack, Text } from '@chakra-ui/layout'
import LoginForm from 'Components/Auth/Login/LoginForm'
import WrapperAuth from 'Components/Auth/WrapperAuth'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaFacebookSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { fontSizes } from 'Token/Token'

const LoginContainer = () => {
  const { register, handleSubmit, errors } = useForm()
  return (
    <WrapperAuth>
      <Center>
        <Heading fontSize={fontSizes.Heading}>Login</Heading>
      </Center>

      <Stack marginY={2} spacing={4}>
        <LoginForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />

        <Center>
          <Text>Or</Text>
        </Center>
        <Button
          boxShadow="md"
          colorScheme="facebook"
          leftIcon={<FaFacebookSquare />}
          fontSize={fontSizes.Button}
        >
          Continue with Facebook
        </Button>
      </Stack>

      <Divider marginY={4} />

      <Link to="/register">
        <Center>
          <Text colorScheme="twitter" _hover={{ textDecoration: 'underline' }}>
            Sign up for an account
          </Text>
        </Center>
      </Link>
    </WrapperAuth>
  )
}

export default LoginContainer
