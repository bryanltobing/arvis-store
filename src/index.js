import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import themeExtended from 'Utils/Theme'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root')

ReactDOM.render(
  <ChakraProvider resetCSS={true} theme={themeExtended}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
  root
)
