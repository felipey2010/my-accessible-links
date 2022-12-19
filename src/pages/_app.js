import AppProvider from '@home/context/Provider'
import { Chakra } from '../../Chakra'

function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </Chakra>
  )
}

export default MyApp
