import React, { useState, useContext } from 'react'

import PageManagerContext from './Context'

export default function PageManagerProvider({ children }) {
  const data = [
    {
      id: 1,
      title: {
        en: 'Application Form',
        pt: 'Formulário de Requerimento'
      },
      description: {
        en: 'This form must be duly completed on the Federal Police website',
        pt: 'Este formulário deve ser devidamente preenchido no site da Polícia Federal'
      },
      link: 'https://servicos.dpf.gov.br/sismigra-internet/faces/publico/tipoSolicitacao/solicitarCie.seam?'
    },
    {
      id: 2,
      title: {
        en: 'Electronic address',
        pt: 'Endereço eletrônico'
      },
      description: {
        en: 'This is a declaration of electronic address and other means of contact. It must be printed and clearly filled',
        pt: 'Esta é uma declaração de endereço eletrônico e demais meios de contato. Deve ser impresso e preenchido de forma clara'
      },
      link: 'https://www.gov.br/pf/pt-br/assuntos/imigracao/declaracoes-e-formularios/declaracao-eletronica-e-demais-meios-de-contato.pdf'
    },
    {
      id: 3,
      title: {
        en: 'Migration Card',
        pt: 'Caretira Migratório'
      },
      description: {
        en: 'The original national migration registration card (NMRC) must be taken along to the Federal Police office',
        pt: 'A carteira original do registro nacional migratório deve ser levada ao escritório da Polícia Federal'
      }
    },
    {
      id: 4,
      title: {
        en: 'Negative certificate - State',
        pt: 'Certidão Negativa - Estadual'
      },
      description: {
        en: 'A criminal record certificate is a document that informs you if there are records of crimes in your name. Type of certificate must be Criminal',
        pt: 'A certidão de antecedentes criminais é um documento que informa se existem registros de crimes seu nome. Tipo de certidão deve ser Criminal'
      },
      link: 'http://certidao.tjrr.jus.br/certidao/pages/certidao/certidao-negativa'
    },
    {
      id: 5,
      title: {
        en: 'NMRC issuance fee',
        pt: 'Taxa de emissão de CRNM'
      },
      description: {
        en: 'Proof of payment of the NMRC issuance fee (revenue code 140120, value R$204.77), when applicable',
        pt: 'Comprovante de pagamento da taxa de emissão de CRNM (código de receita 140120, valor R$204,77), quando aplicável'
      },
      link: 'https://servicos.dpf.gov.br/gru2/gru?nac=1&rec=9'
    },
    {
      id: 6,
      title: {
        en: 'Economic insufficiency',
        pt: 'Hipossuficiência econômica'
      },
      description: {
        en: 'This declaration of economic insufficiency must be completed when you are unable to pay the NMRC issuance fee. If you fill this form, you will not need to pay the NMRC issuance fee',
        pt: 'Esta declaração de hipossuficiência econômica deve ser preenchida quando não tem condições de pagar a taxa de emissão de CRNM. Se preencher este formulário, não precisa pagar a taxa de emissão da CRNM'
      },
      link: 'https://www.gov.br/pf/pt-br/assuntos/imigracao/declaracoes-e-formularios/declaracao-de-hipossuficiencia-economica.pdf/@@download/file/Declara%C3%A7%C3%A3o%20de%20hipossufici%C3%AAncia%20econ%C3%B4mica.pdf'
    },
    {
      id: 7,
      title: {
        en: 'Criminal absence form',
        pt: 'Formulário de ausência criminal'
      },
      description: {
        en: 'Declaration, under penalty of law, of absence of criminal record in any country, in the last five years',
        pt: 'Declaração, sob as penas da lei, de ausência de antecedentes criminais em qualquer país, nos últimos cinco anos'
      },
      link: 'https://www.gov.br/pf/pt-br/assuntos/imigracao/declaracoes-e-formularios/declaracao-sob-as-penas-da-lei-de-ausencia-de-antecedentes-internacionais-penais-ou-policiais-nos-ultimos-cinco-anos.pdf'
    },
    {
      id: 8,
      title: {
        en: 'Proof of financial capacity',
        pt: 'Prova de capacidade financeira'
      },
      description: {
        en: 'Documentation proving your own financial capacity or those responsible for maintaining you in Brazil during the period you intend to stay in the country, or proof that you have been awarded a scholarship, when applicable',
        pt: 'Documentação que comprove capacidade financeira própria ou dos responsáveis pela sua manutenção no Brasil durante o período que pretenda permanecer no país, ou comprovação de que foi contemplado com bolsa de estudos, quando cabível'
      }
    },
    {
      id: 9,
      title: {
        en: 'Proof of enrollment and the academic transcript of the course',
        pt: 'Prova de matrícula e o histórico escolar do curso'
      },
      description: {
        en: 'Documentation proving enrollment and the academic transcript of the course. This document can be issued in the academic system',
        pt: 'Documentação que comprove a matrícula e o histórico escolar do curso. Este documento pode ser obtido online no sistema acadêmico'
      }
    },
    {
      id: 10,
      title: {
        en: 'Proof of not being linked to research',
        pt: 'Comprovante de não estar vinculado à pesquisa'
      },
      description: {
        en: 'Declaration that you are not linked to research or teaching or academic extension',
        pt: 'Declaração de que não está vinculado a pesquisa ou ensino ou extensão acadêmica'
      },
      link: 'https://www.gov.br/pf/pt-br/assuntos/imigracao/declaracoes-e-formularios/declaracao-de-que-nao-esta-vinculado-a-pesquisa-ou-ensino-ou-extensao-academica.pdf/@@download/file/Declara%C3%A7%C3%A3o%20de%20que%20n%C3%A3o%20est%C3%A1%20vinculado%20a%20pesquisa%20ou%20ensino%20ou%20extens%C3%A3o%20acad%C3%AAmica.pdf'
    },
    {
      id: 11,
      title: {
        en: 'Consult the status of the NMRC',
        pt: 'Consultar o status da CRNM'
      },
      description: {
        en: 'Check online to know the status of your card before going to the office to receive it',
        pt: 'Verifique on-line para saber o status do seu cartão antes de ir ao escritório para recebê-lo'
      },
      link: 'https://servicos.dpf.gov.br/sismigra-internet/faces/restrito/atendimento/pesquisarRequerimento.seam'
    }
  ]

  const defaultHeader = [
    {
      head: {
        en: 'Federal Police',
        pt: 'Polícia Federal'
      },
      title: {
        en: 'REPLACE NATIONAL MIGRATORY REGISTRATION CARD',
        pt: 'SUBSTITUIR CARTEIRA DE REGISTRO NACIONAL MIGRATÓRIO'
      },
      description: {
        en: 'Links related to the process of replacing the national immigration registration card',
        pt: 'Links relacionados ao processo de substituição de carteira de registro nacional migratório'
      }
    }
  ]

  const [content, setContent] = useState(data)
  const [header] = useState(defaultHeader)

  return (
    <PageManagerContext.Provider
      value={{
        content,
        setContent,
        header
      }}
    >
      {children}
    </PageManagerContext.Provider>
  )
}

export const usePFManager = () => useContext(PageManagerContext)
