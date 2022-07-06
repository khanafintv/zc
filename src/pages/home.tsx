/* eslint-disable spaced-comment */
/// <reference types="react-scripts" />

import styled from 'styled-components';
import logoHome from '../img/home-img.svg';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 148px;
`;

const HomeImg = styled.div`
  width: 500px;
  height: 521px;
  margin-bottom: 50px;
  background-image: url(${logoHome});
  background-size: cover;
`;

const HomeText = styled.p`
  width: 718px;
  height: 80px;
  font-weight: 400;
  font-size: 48px;
  line-height: 70px;
  text-align: center;
`;

export const HomePage = () => {
  return (
    <>
      <HomeContainer>
        <HomeImg></HomeImg>
        <HomeText>Welcome to our site!</HomeText>
      </HomeContainer>
    </>
  );
};
