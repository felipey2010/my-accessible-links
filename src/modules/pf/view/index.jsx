import MainLayout from '@layout/MainLayout'
import PageManagerProvider from '@pf/context/Provider'

import Page from './Page'

export default function PFPage() {
  return (
    <MainLayout>
      <PageManagerProvider>
        <Page />
      </PageManagerProvider>
    </MainLayout>
  )
}
