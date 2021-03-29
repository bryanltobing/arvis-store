import { ProductData } from 'MockData/Product'

export const getProductById = ({ productId }) => {
  const found = ProductData.find((data) => {
    return data?.id === Number(productId)
  })

  return found
}
