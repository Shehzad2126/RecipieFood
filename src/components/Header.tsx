// src/components/Header.tsx

import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar'; 
import Banner from './Banner'; 
import { FaSignInAlt, FaUser } from 'react-icons/fa';
import LowerNavbar from './LowerNavbar';
interface HeaderProps {
    onShowAllCategories: () => void; 
  }
const HeaderWrapper = styled.header`
  width: 100%;
`;

const UpperNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 60px;
  background-color: #000;
  color: #fff;
`;

const LogoWrapper = styled.div`
  background-color: #98999a
  padding: 10px 20px;
  margin: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color:#545a5c
`;

const NavbarItems = styled.div`
  display: flex;
  gap: 50px;

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const RightItems = styled.div`
  display: flex;
  gap: 50px;

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
      svg {
      color: green; /* Set the icon color to green */
    }
  }
`;

const Header: React.FC<HeaderProps> = ({ onShowAllCategories }) => {

  return (
    <HeaderWrapper>
      <LogoWrapper>Cookpal</LogoWrapper>
      <UpperNavbar>
        <NavbarItems>
          <a href="#">Community</a>
          <a href="#">Books</a>
          <a href="#">Recipe Index</a>
          <a href="#">Popular</a>
        </NavbarItems>
        <RightItems>
          <a href="#">
            <FaSignInAlt /> Register 
          </a>
          <a href="#">
            <FaUser /> Login
          </a>
        </RightItems>
      </UpperNavbar>

      <SearchBar onShowAllCategories={onShowAllCategories} />

      <Banner />

      <LowerNavbar/>
      
    </HeaderWrapper>
  );
};

export default Header;
