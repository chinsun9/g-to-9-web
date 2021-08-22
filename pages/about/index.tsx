import styled from '@emotion/styled';
import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../component/layout';

const Main = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  overflow: auto;
  height: 100%;

  p {
    line-height: 3rem;
  }
`;

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - gto9</title>
      </Head>
      <Layout>
        <Main>
          <h2>ℹ️ About</h2>
          <p>
            소문자 <b>g</b>를 <b>9</b>로 모두 바꾸는 도구입니다
            <br />
            저는 chinsung이라는 닉네임을 사용합니다
            <br />
            깃허브를 처음 가입할 때 <em>chinsung</em>은 누군가 이미 사용하고
            있었습니다
            <br />
            그래서 제 닉네임 마지막 문자인 <b>g</b>를 <b>9</b>로 치환하여{' '}
            <i>chinsun9</i>으로 가입하게 되었습니다 😭
          </p>

          <h3>links</h3>
          <ul>
            <li>
              <a
                href="https://www.npmjs.com/package/g-to-9"
                target="_blank"
                rel="noreferrer"
              >
                📦 g-to-9
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/g-to-9-cli"
                target="_blank"
                rel="noreferrer"
              >
                📦 g-to-9-cli
              </a>
            </li>
            <li>
              <a
                href="https://github.com/chinsun9/g-to-9-web"
                target="_blank"
                rel="noreferrer"
              >
                🌐 g-to-9-web
              </a>
            </li>
          </ul>
        </Main>
      </Layout>
    </>
  );
};

export default About;
