import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Ayush Manoj — software engineer at Bloomberg, focused on the intersection of technology and markets."
        />
        <meta name="theme-color" content="#0a0e14" />
        <meta name="color-scheme" content="dark" />
        <meta property="og:title" content="Ayush Manoj" />
        <meta
          property="og:description"
          content="Software engineer at Bloomberg, focused on the intersection of technology and markets."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
