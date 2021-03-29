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
import React, { useState } from 'react'
import AccountModal from 'Containers/Account/AccountModal'

const AvatarInfo = () => {
  const { currentUser, logout } = useAuthentication()
  const [accoundModalActive, setAccoundModalActive] = useState(false)
  const handleLogout = async () => {
    await logout()
  }

  return (
    <>
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
          <MenuItem onClick={() => setAccoundModalActive(true)}>
            Account
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={<BiLogOut />} onClick={handleLogout}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
      <AccountModal
        isOpen={accoundModalActive}
        onClose={() => setAccoundModalActive(false)}
      />
    </>
  )
}

export default AvatarInfo
