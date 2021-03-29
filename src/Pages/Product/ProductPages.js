import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/breadcrumb'
import ProductDetailContainer from 'Containers/Product/ProductDetail/ProductDetailContainer'
import { BiRightArrowAlt } from 'react-icons/bi'

import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductPages = () => {
  const params = useParams()
  return (
    <>
      <Breadcrumb
        spacing="8px"
        separator={<BiRightArrowAlt color="gray.500" />}
        marginY={4}
      >
        <BreadcrumbItem _hover={{ textDecoration: 'underline' }}>
          <Link to="/">Home</Link>
        </BreadcrumbItem>

        <BreadcrumbItem _hover={{ textDecoration: 'underline' }}>
          <Link to={`/product/${params?.id}`}>Product</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <ProductDetailContainer />
    </>
  )
}

export default ProductPages
