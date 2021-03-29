import React, { forwardRef } from 'react'
import { Input } from '@chakra-ui/react'
import { fontSizes } from 'Token/Token'

const InputAuth = forwardRef((props, ref) => {
  return (
    <Input
      borderRadius="none"
      {...props}
      _hover={{ backgroundColor: 'baseBackground' }}
      fontSize={fontSizes.Body}
      ref={ref}
    />
  )
})

export default InputAuth
