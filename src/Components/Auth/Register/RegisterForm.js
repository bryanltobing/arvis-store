import { Button } from '@chakra-ui/button'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control'
import { InputGroup, InputRightElement } from '@chakra-ui/input'
import { Stack } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { fontSizes } from 'Token/Token'
import InputAuth from '../InputAuth'
import validator from 'validator'

const RegisterForm = ({ register, handleSubmit, errors, watch }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword((showPasswordOld) => !showPasswordOld)
  }

  const onFormSubmit = (data) => {
    console.log(data)
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
      >
        Register
      </Button>
    </form>
  )
}

export default RegisterForm
