import React from 'react';
import { Container, ContactContainer, ContactTitle, ContactLink, ContactItem } from './Footer.styled';
import FooterGraySvg from './FooterGraySvg';
import BlackTextSvg from './BlackTextSvg';
import SvgStartLine from './SvgStartLine';

const Footer = () => {
  return (
    <Container id="contacts">
      <BlackTextSvg />
      <FooterGraySvg />
      <SvgStartLine />
      <ContactContainer>
        <ContactItem>
          <ContactTitle>Office</ContactTitle>
          <ContactLink href="https://www.google.com/maps?ll=-33.90542600769745,151.193673212002" target="_blank" rel="noopener noreferrer">
            123 Sample St,
            <br /> Sydney NSW <br /> 2000 AU
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactTitle>Phone</ContactTitle>
          <ContactLink href="tel:15550000000">
            <span>+1 (555) 000-0000</span>
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactTitle>Email</ContactTitle>
          <ContactLink href="mailto:hello@thenude.io">
            <span>hello@thenude.io</span>
          </ContactLink>
        </ContactItem>
      </ContactContainer>
    </Container>
  );
};

export default Footer;
