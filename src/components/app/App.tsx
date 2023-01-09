import { ChakraProvider } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { queryClient } from '../../react-query/queryClient'
import { QueryClientProvider } from 'react-query'
import { theme } from '../../theme'
import { Loading } from './Loading'
import { Navbar } from './Navbar'
import { Routes } from './Routes'
import { ReactQueryDevtools } from 'react-query/devtools'
export function App(): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Loading />
        <Routes />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  )
}
