// src/components/LowerNavbar.tsx

import React from 'react';
import styled from 'styled-components';

const LowerNavbarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  margin: 30px 650px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

const NavbarLink = styled.a`
  margin: 0 45px;
  color: #6caf43;
  font-size: 1.1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LowerNavbar = () => {
  return (
    <LowerNavbarWrapper>
      <NavbarLink href="#">Home</NavbarLink>
      <NavbarLink href="#">Explore</NavbarLink>
      <NavbarLink href="#">Help</NavbarLink>
      <NavbarLink href="#">Profile</NavbarLink>
    </LowerNavbarWrapper>
  );
};

export default LowerNavbar;
