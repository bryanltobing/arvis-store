import React, { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const cartPersistData =
    localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart'))
  const [cart, setCart] = useState(cartPersistData || [])
  const [cartModalActive, setCartModalActive] = useState(false)

  const value = useMemo(
    () => ({ cart, setCart, cartModalActive, setCartModalActive }),
    [cart, cartModalActive]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
