import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'
import { fontSizes } from 'Token/Token'
import { idrFormat } from 'Utils/Currency'

const ProductItem = ({ item }) => {
  return (
    <Box backgroundColor="white" boxShadow="lg">
      <Box>
        <Image
          src={item?.image}
          width="full"
          objectFit="cover"
          height={{ base: '100px', md: '250px' }}
        />
      </Box>
      <Stack mb={4} padding={{ base: 2, sm: 4 }} spacing={{ base: 2, sm: 4 }}>
        <Text>{item?.name}</Text>
        <Text fontWeight="bold">{idrFormat(item?.price)}</Text>
        <Link to={`/product/${item?.id}`}>
          <Button
            colorScheme="twitter"
            fontSize={fontSizes.Button}
            width="full"
          >
            Detail
          </Button>
        </Link>
      </Stack>
    </Box>
  )
}

export default ProductItem
