import styled from '@emotion/styled';
import Link from 'next/link';
import { FaGithub, FaInfo } from 'react-icons/fa';

const Main = styled.header`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #3c3c3c;
  padding: 20px;

  .title {
    margin: auto;

    h1 {
      margin: 0;
    }
  }

  > * {
    align-self: center;
  }

  .icon {
    font-size: x-large;
  }
`;

const Header = () => {
  return (
    <Main>
      <Link href="/">
        <a className="title">
          <h1>g to 9</h1>
        </a>
      </Link>
      <Link href="/about">
        <a className="icon">
          <FaInfo />
        </a>
      </Link>
    </Main>
  );
};

export default Header;
