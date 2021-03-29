import { Alert } from '@chakra-ui/alert'
import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Center, Stack } from '@chakra-ui/layout'
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/modal'
import { Fade } from '@chakra-ui/transition'
import React, { useEffect } from 'react'
import { IoCheckboxSharp } from 'react-icons/io5'
import { fontSizes } from 'Token/Token'

const CartItemPurchasedContent = ({ onClose, setItemPurchased }) => {
  const handleCloseModalPurchased = () => {
    onClose()
    setItemPurchased(false)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleCloseModalPurchased()
    }, 6000)

    return () => {
      clearTimeout(timeoutId)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <ModalContent borderRadius="none" margin={4}>
      <ModalHeader>Success</ModalHeader>
      <Fade in={true}>
        <ModalBody padding={8}>
          <Stack direction="column" spacing={{ base: 2, sm: 4 }}>
            <Center>
              <Icon
                as={IoCheckboxSharp}
                fontSize={{ base: 80, sm: 120 }}
                color="teal.400"
              />
            </Center>
            <Alert
              backgroundColor="teal.400"
              fontSize={fontSizes.SubHeading}
              textAlign="center"
              color="teal.50"
            >
              Item Purchased. Thank you for shopping with us
            </Alert>
          </Stack>
        </ModalBody>
      </Fade>
      <ModalFooter>
        <Button
          colorScheme="twitter"
          fontSize={fontSizes.Button}
          onClick={handleCloseModalPurchased}
        >
          Continue Shopping
        </Button>
      </ModalFooter>
    </ModalContent>
  )
}

export default CartItemPurchasedContent
