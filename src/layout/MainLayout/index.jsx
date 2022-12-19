import { Footer, Navbar } from 'components'
import PageManagerProvider from '@home/context/Provider'
import { Main } from '@styles/CustomComponents'

export default function MainLayout({ children }) {
  return (
    <PageManagerProvider>
      <Main>
        <Navbar />
        {children}
        <Footer />
      </Main>
    </PageManagerProvider>
  )
}
