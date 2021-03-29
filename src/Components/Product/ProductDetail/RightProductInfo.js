import {
  Badge,
  Box,
  HStack,
  Text,
  Stack,
  Divider,
  UnorderedList,
  ListItem,
} from '@chakra-ui/layout'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'
import React from 'react'
import { fontSizes } from 'Token/Token'
import { idrFormat } from 'Utils/Currency'

const RightProductInfo = ({ productInfo }) => {
  return (
    <Box width={{ base: 'full', md: '49%' }}>
      <Stack>
        <Text fontSize={fontSizes.SubHeading} fontWeight="bold">
          {productInfo?.name}
        </Text>

        <HStack>
          {productInfo?.category?.map((category, index) => {
            return (
              <Badge colorScheme="twitter" key={index}>
                {category}
              </Badge>
            )
          })}
        </HStack>

        <Text fontSize={fontSizes.Heading} fontWeight="bold">
          {idrFormat(productInfo?.price)}
        </Text>

        <Tabs variant="line" colorScheme="twitter">
          <TabList>
            <Tab>Description</Tab>
            <Tab>Important</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Text>
                {productInfo?.description
                  ? productInfo?.description
                  : 'No Description Provided'}
              </Text>
            </TabPanel>
            <TabPanel>
              <Text fontWeight="bold">Kebijakan Pengembailan Barang</Text>
              <Divider marginY={1} colorScheme="twitter" />
              <Text>
                *keadaan jika barang baru buka box dan ada error / cacat pabrik
                / kerusakan
              </Text>
              <Divider marginY={1} colorScheme="twitter" />
              <Text>Syarat Pengembalian</Text>
              <UnorderedList>
                <ListItem>Segel utuh / belum pernah di bongkar.</ListItem>
                <ListItem>
                  Fisik MULUS 100% tanpa ada titik atau lecet ataupun garis
                  halus.
                </ListItem>
                <ListItem>
                  Semua kelengkapan dan dus harus dalam keadaan baik dan bersih.
                </ListItem>
                <ListItem>
                  NO HUMAN ERROR / kerusakan yang bukan dari kesalahan
                  pemakaian, kecerobohan (terjatuh/tertindih), perlakuan kasar,
                  akibat huru-hara, atau terkena cairan.
                </ListItem>
              </UnorderedList>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  )
}

export default RightProductInfo
