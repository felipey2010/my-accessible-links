import React, { useState, useEffect, useContext, useCallback } from 'react'

import PageManagerContext from './Context'

import { useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function PageManagerProvider({ children }) {
  const data = [
    {
      id: 1,
      title: {
        en: 'Home',
        pt: 'Inicial'
      },
      description: {
        en: 'This platform has the purpose of making some important links accessible in one place.',
        pt: 'Esta plataforma tem o objetivo de tornar alguns links importantes acessíveis em um só lugar.'
      },
      button: {
        en: 'Get Started',
        pt: 'Iniciar'
      },
      link: '/links'
    }
  ]

  let flag = 0

  //user login info
  const [user, setUser] = useState([])
  const [language, setLanguage] = useState('pt')
  const [content, setContent] = useState(data)
  const [backLink, setBackLink] = useState('/')

  const router = useRouter()

  //Color mode info
  const { colorMode, setColorMode } = useColorMode()

  useEffect(() => {
    let storedColorMode =
      localStorage.getItem('chakra-ui-color-mode') ?? 'light'

    if (storedColorMode !== colorMode) setColorMode(storedColorMode)
  }, [colorMode])

  useEffect(() => {
    if (language) {
      localStorage.setItem('meus-links-language', language)
    }
  }, [language])

  useEffect(() => {
    if (flag === 0) {
      setLanguage(localStorage.getItem('meus-links-language'))
      flag = 1
    }
  }, [])

  const checkBackLink = useCallback(
    (link) => {
      if (link === '/' || link === '/links') setBackLink('/')
      else setBackLink('/links')
    },
    [router.asPath]
  )

  useEffect(() => {
    checkBackLink(router.asPath)
  }, [router.asPath])

  return (
    <PageManagerContext.Provider
      value={{
        user,
        setUser,
        language,
        setLanguage,
        content,
        setContent,
        backLink
      }}
    >
      {children}
    </PageManagerContext.Provider>
  )
}

export const usePageManager = () => useContext(PageManagerContext)
