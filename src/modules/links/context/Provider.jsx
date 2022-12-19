import React, { useState, useContext } from 'react'

import PageManagerContext from './Context'

export default function PageManagerProvider({ children }) {
  const data = [
    {
      id: 1,
      title: {
        en: 'Federal Police',
        pt: 'Polícia Federal'
      },
      description: {
        en: 'checklist',
        pt: 'checklist'
      },
      link: '/links/pf',
      image:
        'https://www.justica.gov.br/news/collective-nitf-content-1552423838.17/logo-pf.png'
    }
  ]

  const [content, setContent] = useState(data)

  return (
    <PageManagerContext.Provider
      value={{
        content,
        setContent
      }}
    >
      {children}
    </PageManagerContext.Provider>
  )
}

export const useLinksManager = () => useContext(PageManagerContext)
