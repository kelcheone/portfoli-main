import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/kelche.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="Blockchain developer" />
          <meta
            name="keywords"
            content="dApp developer, Blockchain developer, freelance developer, Solidity developer, Solidity engineer, NFT developer, solana developer"
          />
        </Head>
        <body className="bg-gradient-to-r from-green to-blue-400 dark:from-dark-100 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
