import styled from '@emotion/styled';
import Header from './header';

const Main = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: #1e1e1e;
  color: white;
`;

type Prop = {
  children: React.ReactNode;
};

const Layout = ({ children }: Prop) => {
  return (
    <>
      <Main>
        <Header />
        {children}
      </Main>
    </>
  );
};

export default Layout;
