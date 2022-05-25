import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebProvider } from '@3rdweb/react'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const supportedChainIds = [1, 3, 4, 42, 80001]
  const connectors = {
    injected: {},
  }

  return (
    <ThirdwebProvider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  )

}

export default MyApp
