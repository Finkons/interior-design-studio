import React from 'react';
import { Container, LogoWrap, StyledNav, StyledLink, SocialWrap, SocialLink, BurgerBtn } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <LogoWrap>
        <img src="/logo.svg" alt="logo" height="64" width="172" />
      </LogoWrap>
      <StyledNav>
        <StyledLink href="/#about">About Us</StyledLink>
        <StyledLink href="/#portfolio">Portfolio</StyledLink>
        <StyledLink href="/#services">Services</StyledLink>
        <StyledLink href="/#team">Our Team</StyledLink>
        <StyledLink href="/#contacts">Contacts</StyledLink>
      </StyledNav>
      <BurgerBtn>
        <img src="header/burger.svg" alt="burger menu button" />
      </BurgerBtn>
      <SocialWrap>
        <SocialLink to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          Instagram
        </SocialLink>
        <SocialLink to="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
          Behance
        </SocialLink>
      </SocialWrap>
    </Container>
  );
};

export default Header;
