import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <title>
            TR Energia Solar - Energia solar, redução na conta de luz.
          </title>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="TR,  energia Solar, recife, pernambuco, redução na conta"
          />
          <meta
            name="description"
            content="Oferecemos soluções em energia solar para redução na conta de luz. Entre em contato conosco para saber mais."
          />
          <meta name="author" content="Lucas Lima" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-WE3ST3KW82"
          ></script>
          <link href="../common/googleTagManager.js"></link>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
