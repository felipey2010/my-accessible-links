import Head from 'next/head'

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title ? title + ' - Linkies' : 'Linkies'}</title>
      <meta
        name="description"
        content={
          description
            ? description
            : 'My resource page to keep important links accessible'
        }
      />
      <meta name="keywords" content="site, resources, links" />

      <meta property="og:type" content="blog" />
      <meta
        property="og:title"
        content={title ? title + ' - Linkies' : 'Linkies'}
      />
      <meta
        property="og:description"
        content={
          description
            ? description
            : 'My resource page to keep important links accessible'
        }
      />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content="Linkies" />
      <meta name="twitter:card" content="blog" />
      <meta
        name="twitter:title"
        content={title ? title + ' - Linkies' : 'Linkies'}
      />
      <meta
        name="twitter:description"
        content={
          description
            ? description
            : 'My resource page to keep important links accessible'
        }
      />
      {/* End Twitter tags */}
    </Head>
  )
}
