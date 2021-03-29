import { Button } from '@chakra-ui/button'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control'
import { Stack } from '@chakra-ui/layout'
import React from 'react'
import { fontSizes } from 'Token/Token'
import InputAuth from '../InputAuth'

const LoginForm = ({ register, handleSubmit, errors }) => {
  const onFormSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Stack spacing={4}>
        <FormControl isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <InputAuth
            placeholder="Type your email..."
            ref={register({ required: true })}
            name="email"
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
      >
        Log In
      </Button>
    </form>
  )
}

export default LoginForm
