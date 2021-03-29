import { Avatar } from '@chakra-ui/avatar'
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/menu'
import { useAuthentication } from 'Context/AuthenticationContext'
import { BiLogOut } from 'react-icons/bi'
import React from 'react'

const AvatarInfo = () => {
  const { currentUser, logout } = useAuthentication()
  const handleLogout = async () => {
    await logout()
  }

  return (
    <Menu>
      <MenuButton>
        <Avatar
          name={currentUser?.displayName ?? currentUser?.email}
          size="sm"
          boxShadow="xl"
          src={currentUser?.photoURL}
          cursor="pointer"
          border="1px solid white"
        />
      </MenuButton>
      <MenuList borderRadius="none">
        <MenuItem>Account</MenuItem>
        <MenuDivider />
        <MenuItem icon={<BiLogOut />} onClick={handleLogout}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default AvatarInfo
