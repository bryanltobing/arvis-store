import { Box, Flex } from '@chakra-ui/layout'
import { Fade } from '@chakra-ui/transition'
import React from 'react'

const WrapperAuth = ({ children }) => {
  return (
    <Fade in={true}>
      <Flex
        flexDirection="column"
        width="full"
        minHeight="100vh"
        height="full"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width={{ base: '300px', sm: '400px' }}
          height="auto"
          padding={{ base: 4, sm: 8 }}
          boxShadow="md"
          backgroundColor="white"
          transition="ease"
          transitionDuration="0.5s"
        >
          {children}
        </Box>
      </Flex>
    </Fade>
  )
}

export default WrapperAuth
