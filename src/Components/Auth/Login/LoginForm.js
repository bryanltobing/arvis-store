import { Button } from '@chakra-ui/button'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control'
import { Center, Stack, Text } from '@chakra-ui/layout'
import { useAuthentication } from 'Context/AuthenticationContext'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { fontSizes } from 'Token/Token'
import ErrorHandler from 'Utils/ErrorHandler'
import ContinueWithFacebookButton from '../ContinueWithFacebookButton'
import InputAuth from '../InputAuth'

const LoginForm = ({ register, handleSubmit, errors }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuthentication()
  const history = useHistory()

  const onFormSubmit = async (data) => {
    const loginData = {
      email: data?.email,
      password: data?.password,
    }

    try {
      setIsLoading(true)
      await login(loginData)
      history.push('/')
    } catch (err) {
      console.log(err)
      ErrorHandler(err?.code)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Stack spacing={4}>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <InputAuth
              placeholder="Type your email..."
              ref={register({ required: true })}
              name="email"
              disabled={isLoading}
            />
            {errors.email && (
              <FormErrorMessage fontSize={fontSizes.Body}>
                Email is required
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <InputAuth
              placeholder="Type your password..."
              type="password"
              ref={register({ required: true })}
              name="password"
              disabled={isLoading}
            />
            {errors.password && (
              <FormErrorMessage fontSize={fontSizes.Body}>
                Password is required
              </FormErrorMessage>
            )}
          </FormControl>
        </Stack>
        <Button
          colorScheme="twitter"
          marginY={6}
          width="full"
          type="submit"
          boxShadow="md"
          fontSize={fontSizes.Button}
          disabled={isLoading}
        >
          Log In
        </Button>
      </form>
      <Center>
        <Text>Or</Text>
      </Center>
      <ContinueWithFacebookButton setIsLoading={setIsLoading} />
    </>
  )
}

export default LoginForm
