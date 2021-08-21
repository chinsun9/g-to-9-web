import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://cdn.jsdelivr.net/gh/chinsun9/chinsun9.github.io@master/img/favicon-bold-color201202.svg?"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
