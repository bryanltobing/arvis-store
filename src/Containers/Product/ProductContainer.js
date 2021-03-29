import { Box, Heading, SimpleGrid } from '@chakra-ui/layout'
import ProductItem from 'Components/Product/ProductItem'
import { ProductData } from 'MockData/Product'
import React from 'react'

const ProductContainer = () => {
  return (
    <Box>
      <Heading marginBottom={4}>Product</Heading>

      <SimpleGrid
        minChildWidth={{ base: '120px', sm: '120px', md: '200px' }}
        spacing={{ base: 3, sm: 4 }}
      >
        {ProductData?.map((item) => {
          return <ProductItem item={item} key={item?.id} />
        })}
      </SimpleGrid>
    </Box>
  )
}

export default ProductContainer
