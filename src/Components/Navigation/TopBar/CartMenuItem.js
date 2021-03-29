import { Image } from '@chakra-ui/image'
import { MenuItem } from '@chakra-ui/menu'
import { getProductById } from 'Fetcher/Product'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CartMenuItem = ({ productId }) => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    const product = getProductById({ productId })
    setProduct(product)
  }, [productId])

  return (
    <Link to={`/product/${productId}`}>
      <MenuItem minH="48px">
        <Image
          boxSize="2rem"
          src={product?.image}
          alt={product?.name}
          mr="12px"
        />
        <span>{product?.name}</span>
      </MenuItem>
    </Link>
  )
}

export default CartMenuItem
