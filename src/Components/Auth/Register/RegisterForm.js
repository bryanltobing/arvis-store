import { Button } from '@chakra-ui/button'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control'
import { InputGroup, InputRightElement } from '@chakra-ui/input'
import { Center, Stack, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { fontSizes } from 'Token/Token'
import InputAuth from '../InputAuth'
import validator from 'validator'
import { useAuthentication } from 'Context/AuthenticationContext'
import { useHistory } from 'react-router'
import ErrorHandler from 'Utils/ErrorHandler'
import ContinueWithFacebookButton from '../ContinueWithFacebookButton'

const RegisterForm = ({ register, handleSubmit, errors, watch }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { register: signUp } = useAuthentication()
  const history = useHistory()

  const handleShowPassword = () => {
    setShowPassword((showPasswordOld) => !showPasswordOld)
  }

  const onFormSubmit = async (data) => {
    const signUpData = {
      email: data?.email,
      password: data?.password,
    }
    try {
      setIsLoading(true)
      await signUp(signUpData)
      history.push('/')
    } catch (err) {
      console.log(err)
      ErrorHandler(err?.code, err?.message)
    } finally {
      setIsLoading(false)
    }
  }

  const emailValidator = (data) => {
    if (validator.isEmail(data)) {
      return true
    }

    return 'Invalid Email'
  }

  const confirmPasswordValidator = (data) => {
    if (data === watch('password')) {
      return true
    }

    return 'Confirmation password do not match'
  }

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Stack spacing={4}>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <InputAuth
              type="text"
              placeholder="Type your email..."
              borderRadius="none"
              ref={register({ required: true, validate: emailValidator })}
              name="email"
              disabled={isLoading}
            />
            {errors.email && (
              <FormErrorMessage fontSize={fontSizes.Body}>
                {errors.email?.message === ''
                  ? 'Email is Required'
                  : errors.email?.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>

            <InputGroup size="md">
              <InputAuth
                type={showPassword ? 'text' : 'password'}
                paddingRight="4.5rem"
                placeholder="Type your password..."
                borderRadius="none"
                name="password"
                ref={register({ required: true })}
                disabled={isLoading}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage fontSize={fontSizes.Body}>
              {errors.password && 'Password is required'}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors['confirm-password']}>
            <FormLabel>Confirmation Password</FormLabel>

            <InputGroup size="md">
              <InputAuth
                type={showPassword ? 'text' : 'password'}
                paddingRight="4.5rem"
                placeholder="Confirmation Password..."
                borderRadius="none"
                name="confirm-password"
                ref={register({
                  required: true,
                  validate: confirmPasswordValidator,
                })}
                disabled={isLoading}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage fontSize={fontSizes.Body}>
              {errors['confirm-password']?.message === ''
                ? 'Confirmation password is required'
                : errors['confirm-password']?.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>
        <Button
          type="submit"
          marginY={6}
          width="full"
          colorScheme="twitter"
          boxShadow="md"
          fontSize={fontSizes.Button}
          disabled={isLoading}
        >
          Register
        </Button>
      </form>
      <Center>
        <Text>Or</Text>
      </Center>
      <ContinueWithFacebookButton setIsLoading={setIsLoading} />
    </>
  )
}

export default RegisterForm
