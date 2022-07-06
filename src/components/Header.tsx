/* eslint-disable spaced-comment */
/// <reference types="react-scripts" />

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '../img/logo.png';

const HeaderStyled = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 52px;
  padding-right: 40px;
  background: linear-gradient(90deg, #c65252 0%, #5329ca 100%);
`;

const HeaderLogo = styled.div`
  position: relative;
  cursor: pointer;
`;

const HeaderLogoImg = styled.div`
  position: absolute;
  top: -28px;
  left: 0;
  width: 82px;
  height: 120px;
  background-image: url(${logoImg});
  background-size: cover;
`;

const HeaderLogoText = styled.div`
  position: absolute;
  top: -12px;
  left: 100px;
  width: 104px;
  height: 24px;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
  line-height: 100%;
`;

const HeaderMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const HeaderMenuItem = styled.li`
  margin-left: 40px;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <Link style={{ textDecoration: 'none' }} to="/">
        <HeaderLogo>
          <HeaderLogoImg></HeaderLogoImg>
          <HeaderLogoText>Cat facts</HeaderLogoText>
        </HeaderLogo>
      </Link>

      <HeaderMenu>
        <Link style={{ textDecoration: 'none' }} to="/facts">
          <HeaderMenuItem>facts list</HeaderMenuItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/fact">
          <HeaderMenuItem>random fact</HeaderMenuItem>
        </Link>
      </HeaderMenu>
    </HeaderStyled>
  );
};
