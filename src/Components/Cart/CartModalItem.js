import { Image } from '@chakra-ui/image'
import { Stack, Text } from '@chakra-ui/layout'
import { getProductById } from 'Fetcher/Product'
import React, { useEffect, useState } from 'react'
import { idrFormat } from 'Utils/Currency'

const CartModalItem = ({ productId, setTotalPrice }) => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    const product = getProductById({ productId })

    if (product) {
      setProduct(product)
    }
    setTotalPrice((old) => Number(old) + Number(product?.price))
    // eslint-disable-next-line
  }, [productId])

  return (
    <Stack alignItems="center" direction="row" spacing={4}>
      <Image boxSize="4rem" src={product?.image} />{' '}
      <Stack direction="column">
        <Text>{product?.name}</Text>
        <Text fontWeight="bold">{idrFormat(product?.price)}</Text>
      </Stack>
    </Stack>
  )
}

export default CartModalItem
