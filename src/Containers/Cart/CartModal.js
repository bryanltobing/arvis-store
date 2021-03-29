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
    }, 3000)
  }

  return (
    <>
      <Modal
        onClose={onClose}
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
            onClose={onClose}
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
