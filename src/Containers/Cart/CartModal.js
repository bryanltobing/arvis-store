import { Modal, ModalOverlay } from '@chakra-ui/modal'
import CartCheckoutContent from 'Components/Cart/CartCheckoutContent'
import CartItemPurchasedContent from 'Components/Cart/CartItemPurchasedContent'
import { useCart } from 'Context/CartContext'
import React, { useState } from 'react'

const CartModal = ({ isOpen, onClose }) => {
  const { setCart } = useCart()
  const btnRef = React.useRef()
  const [totalPrice, setTotalPrice] = useState(0)
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [itemPurchased, setItemPurchased] = useState(false)

  const handleCheckout = () => {
    setIsCheckingOut(true)
    setTimeout(() => {
      setIsCheckingOut(false)
      localStorage.removeItem('cart')
      setCart([])
      setItemPurchased(true)
      setTotalPrice(0)
    }, 3000)
  }

  const handleCloseModal = () => {
    onClose()

    setTotalPrice(0)
  }

  return (
    <>
      <Modal
        onClose={handleCloseModal}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={'outside'}
        isCentered
      >
        <ModalOverlay />
        {!itemPurchased ? (
          <CartCheckoutContent
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            handleCheckout={handleCheckout}
            isCheckingOut={isCheckingOut}
            onClose={handleCloseModal}
          />
        ) : (
          <CartItemPurchasedContent
            onClose={onClose}
            setItemPurchased={setItemPurchased}
          />
        )}
      </Modal>
    </>
  )
}

export default CartModal
