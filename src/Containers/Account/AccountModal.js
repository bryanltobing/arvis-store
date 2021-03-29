import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import { Stack, Text } from '@chakra-ui/layout'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal'
import { useAuthentication } from 'Context/AuthenticationContext'
import React from 'react'
import { fontSizes } from 'Token/Token'

const AccountModal = ({ isOpen, onClose }) => {
  const { currentUser } = useAuthentication()

  const userData = currentUser?.providerData?.[0]

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="none" margin={4}>
        <ModalHeader>Account Information</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack
            direction="column"
            spacing={4}
            marginY={2}
            justifyContent="center"
            width="full"
            alignItems="center"
            textAlign="center"
          >
            <Avatar
              size="2xl"
              name={userData?.displayName ?? userData?.email}
              src={userData.photoURL}
            />
            <Stack>
              {userData?.displayName && (
                <Text fontWeight="semibold">{userData?.displayName}</Text>
              )}
              <Text fontWeight="bold">{userData?.email}</Text>
            </Stack>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} fontSize={fontSizes.Button}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AccountModal
