import type { NextPage } from 'next';
import Layout from '../component/layout';
import Head from 'next/head';
import Gto9 from '../component/gto9';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>gto9</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Gto9 />
    </Layout>
  );
};

export default Home;
