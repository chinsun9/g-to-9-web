import type { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import { gto9 } from 'g-to-9';
import Layout from '../component/layout';
import Head from 'next/head';

const Home: NextPage = () => {
  const [text, setText] = useState('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <Layout>
      <Head>
        <title>gto9</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main">
        <input
          type="text"
          className="input"
          value={text}
          onChange={onChangeHandler}
        />

        <div className="output">{gto9(text)}</div>
      </div>
    </Layout>
  );
};

export default Home;
