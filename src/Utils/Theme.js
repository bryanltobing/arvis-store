import { extendTheme } from '@chakra-ui/react'
import { fontSizes } from 'Token/Token'

const themeExtended = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'none',
      },
    },
    Text: {
      baseStyle: {
        fontSize: fontSizes.Body,
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: fontSizes.Body,
      },
    },
  },
  fonts: {
    body: 'Open Sans',
    heading: 'Overpass',
  },
  colors: {
    baseBackground: '#f2f2f2',
  },
  fontSizes: {
    heading: '30px',
    headingMobile: '26px',
    subHeading: '24px',
    subHeadingMobile: '20px',
    body: '16px',
    bodyMobile: '12px',
    button: '16px',
    buttonMobile: '14px',
  },
})

export default themeExtended
