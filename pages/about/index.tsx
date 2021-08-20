import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../component/layout';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - gto9</title>
      </Head>
      <Layout>
        <div>about page</div>
      </Layout>
    </>
  );
};

export default About;
