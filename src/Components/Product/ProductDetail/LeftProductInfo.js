import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Stack } from '@chakra-ui/layout'
import { useToast } from '@chakra-ui/toast'
import { useCart } from 'Context/CartContext'
import React, { useEffect, useState } from 'react'
import { fontSizes } from 'Token/Token'

const LeftProductInfo = ({ productInfo }) => {
  const cartPersistData =
    localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart'))

  const { setCart } = useCart()
  const [addedToCart, setAddedToCart] = useState(false)

  useEffect(() => {
    if (cartPersistData?.includes(productInfo?.id)) {
      setAddedToCart(true)
    } else {
      setAddedToCart(false)
    }
  }, [cartPersistData, productInfo])

  const toast = useToast()
  const handleBuyProduct = () => {
    // Update global cart state
    setCart((oldCart) => [...oldCart, productInfo?.id])

    // persist data in local storage
    const oldPersistCartData = localStorage.getItem('cart')

    if (oldPersistCartData && Array.isArray(JSON.parse(oldPersistCartData))) {
      const newPersistCartData = [
        ...JSON.parse(oldPersistCartData),
        productInfo?.id,
      ]
      localStorage.setItem('cart', JSON.stringify(newPersistCartData))
    } else {
      localStorage.setItem('cart', JSON.stringify([productInfo?.id]))
    }

    // show toast notification
    toast({
      title: 'Success',
      description: 'Added to cart',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top',
    })

    // update page state
    setAddedToCart(true)
  }

  return (
    <Box width={{ base: 'full', md: '49%' }}>
      <Stack spacing={8}>
        <Image
          src={productInfo?.image}
          width={{ base: 'full', md: '900px' }}
          maxHeight="500px"
          objectFit="cover"
        />
        {!addedToCart ? (
          <Button
            colorScheme="twitter"
            onClick={handleBuyProduct}
            fontSize={fontSizes.Button}
          >
            Buy This Product
          </Button>
        ) : (
          <Button colorScheme="twitter" disabled fontSize={fontSizes.Button}>
            Added To Cart
          </Button>
        )}
      </Stack>
    </Box>
  )
}

export default LeftProductInfo
