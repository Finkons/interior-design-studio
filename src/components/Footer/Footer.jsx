import React from 'react';
import { Container } from './Footer.styled';
import FooterGraySvg from './FooterGraySvg';
import BlackTextSvg from './BlackTextSvg';

const Footer = () => {
  return (
    <Container id="contacts">
      <BlackTextSvg />
      <FooterGraySvg />
    </Container>
  );
};

export default Footer;
