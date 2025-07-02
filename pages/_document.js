import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* OneTrust Script for Cookie Consent */}
          <script
            src="https://cdn-apac.onetrust.com/scripttemplates/otSDKStub.js"
            data-document-language="true"
            type="text/javascript"
            charset="UTF-8"
            data-domain-script="0197c9d8-18e5-76e1-aa14-df0d8ac7a7a6"
          ></script>
          <script type="text/javascript">
            {`
              function OptanonWrapper() { }
            `}
          </script>
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
