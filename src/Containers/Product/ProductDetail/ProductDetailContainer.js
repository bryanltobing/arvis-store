import { Box, Divider, Flex } from '@chakra-ui/layout'
import { Fade } from '@chakra-ui/transition'
import LeftProductInfo from 'Components/Product/ProductDetail/LeftProductInfo'
import RightProductInfo from 'Components/Product/ProductDetail/RightProductInfo'
import { getProductById } from 'Fetcher/Product'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetail = () => {
  const params = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const product = getProductById({ productId: params?.id })

    if (product) {
      setProduct(product)
    }
  }, [params])

  return (
    <Box>
      <Fade in={true}>
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <LeftProductInfo productInfo={product} />
          <Divider orientation="vertical" marginY={{ base: 3, md: 0 }} />
          <RightProductInfo productInfo={product} />
        </Flex>
      </Fade>
    </Box>
  )
}

export default ProductDetail
