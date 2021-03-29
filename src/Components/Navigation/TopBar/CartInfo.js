import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/menu'
import React from 'react'
import { IconButton } from '@chakra-ui/button'
import { IoCartOutline } from 'react-icons/io5'
import { Box, Text } from '@chakra-ui/layout'
import { useCart } from 'Context/CartContext'
import CartMenuItem from './CartMenuItem'

const CartInfo = () => {
  const { cart, setCartModalActive } = useCart()
  return (
    <Menu>
      <Box position="relative">
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<IoCartOutline />}
          variant="outline"
          color="twitter.50"
          _hover={{ color: 'twitter.900', backgroundColor: 'twitter.50' }}
          _active={{ color: 'twitter.900', backgroundColor: 'twitter.50' }}
        />
        {cart?.length > 0 && (
          <Text
            position="absolute"
            bottom={'-10px'}
            left={'-10px'}
            backgroundColor="red.400"
            width="24px"
            height="24px"
            borderRadius="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {cart?.length}
          </Text>
        )}
      </Box>
      {cart?.length > 0 ? (
        <MenuList borderRadius="none">
          {cart?.map((productId) => (
            <CartMenuItem productId={productId} key={productId} />
          ))}

          <MenuDivider />
          <MenuItem onClick={() => setCartModalActive(true)}>
            <Text>See All</Text>
          </MenuItem>
        </MenuList>
      ) : (
        <MenuList>
          <MenuItem>
            <Text>Cart Empty</Text>
          </MenuItem>
        </MenuList>
      )}
    </Menu>
  )
}

export default CartInfo
