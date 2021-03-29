import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Stack } from '@chakra-ui/layout'
import React from 'react'

const LeftProductInfo = ({ productInfo }) => {
  return (
    <Box width={{ base: 'full', md: '49%' }}>
      <Stack spacing={8}>
        <Image
          src={productInfo?.image}
          width={{ base: 'full', md: '900px' }}
          maxHeight="500px"
          objectFit="cover"
        />
        <Button colorScheme="twitter">Buy This Product</Button>
      </Stack>
    </Box>
  )
}

export default LeftProductInfo
