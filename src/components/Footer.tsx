// src/components/Footer.tsx

import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-image: url('/assets/footerBG.jpg'); /* Path to your background image */
  background-size: cover;
  background-position: center;
  padding: 40px 20px 20px 90px;
  color: white;
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: left; /* Center content vertically */
  height: 243px;
  position: relative;
  z-index: 10;
  flex-direction: column; /* Stack logo and text vertically */
`;

const FooterLogo = styled.img`
  width: 120px;
  position: absolute;
  top:90px;
  margin-bottom: 10px; /* Add space between logo and text */
`;

const FooterText = styled.p`
  font-family: 'Montserrat', sans-serif; /* Apply Montserrat font */
  font-weight: 400; /* Weight 400 */
  font-size: 20px; /* Size 20px */
  position: absolute;
  top:165px;
  line-height: 24.38px; /* Line height 24.38px */
  color: white;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      {/* Add your logo */}
      <FooterLogo src="/assets/logo.png" alt="Cookpal Logo" />
      <FooterText>All Rights Reserved</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
