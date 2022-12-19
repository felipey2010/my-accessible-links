import MainLayout from '@layout/MainLayout'
import PageManagerProvider from '@links/context/Provider'
import Page from './Page'

import { SEO } from 'components'

export default function LinksPage() {
  return (
    <MainLayout>
      <PageManagerProvider>
        <SEO title="Links" description="Links available" />
        <Page />
      </PageManagerProvider>
    </MainLayout>
  )
}
