import type { NextPage } from 'next';
import Layout from '../component/layout';
import Head from 'next/head';
import Gto9 from '../component/gto9';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>gto9</title>
      </Head>

      <Layout>
        <Gto9 />
      </Layout>
    </>
  );
};

export default Home;
