// theme.config.js
import Head from "next/head"
import Image from "next/image"
export default {
    projectLink: 'https://github.com/lexDAO/lexlib-site', // GitHub link in the navbar
    docsRepositoryBase: 'https://github.com/lexDAO/lexlib-site/blob/main', // base URL for the docs repository
    titleSuffix: ' - LexDAO',
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: `MIT ${new Date().getFullYear()} © LexDAO.`,
    footerEditLink: ` Edit this page on GitHub`,
    logo: (
      <>
        <Image src="/lexdao.png" width="30px" height="30px" />
        <span>Legal Engineering Library</span>
      </>
    ),
    head: (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="LexLib" />
        <meta name="og:title" content="LexLib" />
      </Head>
    ),
  }