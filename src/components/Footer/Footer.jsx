import React from 'react';
import { Container } from './Footer.styled';
import FooterGraySvg from './FooterGraySvg';
import BlackTextSvg from './BlackTextSvg';
import SvgStartLine from './SvgStartLine';

const Footer = () => {
  return (
    <Container id="contacts">
      <BlackTextSvg />
      <FooterGraySvg />
      <SvgStartLine />
    </Container>
  );
};

export default Footer;
