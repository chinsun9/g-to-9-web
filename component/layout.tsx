import styled from '@emotion/styled';
import Header from './header';

const Main = styled.div`
  min-height: 100vh;
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
