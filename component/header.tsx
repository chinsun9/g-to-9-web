import styled from '@emotion/styled';
import Link from 'next/link';

const Main = styled.header`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #c0c0c0;
  justify-content: space-between;

  h1 {
    margin: 0.3em;
  }
`;

const Header = () => {
  return (
    <Main>
      <div>repo</div>
      <Link href="/">
        <a>
          <h1>g to 9</h1>
        </a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </Main>
  );
};

export default Header;
