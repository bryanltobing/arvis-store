import { Button, ButtonGroup } from '@chakra-ui/button'
import { Stack, Text } from '@chakra-ui/layout'
import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/modal'
import { useCart } from 'Context/CartContext'
import React from 'react'
import { fontSizes } from 'Token/Token'
import { idrFormat } from 'Utils/Currency'
import CartModalItem from './CartModalItem'

const CartCheckoutContent = ({
  totalPrice,
  setTotalPrice,
  handleCheckout,
  onClose,
  isCheckingOut,
}) => {
  const { cart } = useCart()

  return (
    <ModalContent borderRadius="none" margin={4}>
      <ModalHeader>
        Cart - Total {totalPrice && idrFormat(totalPrice)}
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        {cart?.length > 0 ? (
          <Stack direction="column" spacing={4}>
            {cart?.map((productId, index) => (
              <CartModalItem
                key={index}
                productId={productId}
                setTotalPrice={setTotalPrice}
              />
            ))}
          </Stack>
        ) : (
          <Text>Cart Is Empty</Text>
        )}
      </ModalBody>
      <ModalFooter>
        <ButtonGroup>
          {cart?.length > 0 && (
            <Button
              onClick={handleCheckout}
              colorScheme="twitter"
              isLoading={isCheckingOut}
              fontSize={fontSizes.Button}
            >
              Checkout
            </Button>
          )}

          <Button onClick={onClose} fontSize={fontSizes.Button}>
            Cancel
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </ModalContent>
  )
}

export default CartCheckoutContent
