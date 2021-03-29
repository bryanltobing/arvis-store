import { Box, Flex, Heading } from '@chakra-ui/layout'
import AvatarInfo from 'Components/Navigation/TopBar/AvatarInfo'
import React from 'react'
import { fontSizes } from 'Token/Token'

const TopBar = () => {
  return (
    <Box
      height="60px"
      width="full"
      backgroundColor="twitter.700"
      padding={{ base: 4, sm: 8 }}
    >
      <Flex justifyContent="space-between" alignItems="center" height="full">
        <Heading
          color="twitter.50"
          textShadow="1px 1px #000"
          fontSize={fontSizes.SubHeading}
        >
          Arvis Store
        </Heading>
        <AvatarInfo />
      </Flex>
    </Box>
  )
}

export default TopBar
