import styled from 'styled-components';
import { Header } from '../components/Header';

interface MainLayoutProps {
  children: any;
}

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContentStyled = styled.div`
  flex-grow: 1;
`;

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <WrapperStyled>
      <MainContentStyled>
        <Header />
        {children}
      </MainContentStyled>
    </WrapperStyled>
  );
};
