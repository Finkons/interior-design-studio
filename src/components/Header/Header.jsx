import React from "react";
import {
  Container,
  LogoWrap,
  StyledNav,
  StyledLink,
  SocialWrap,
  SocialLink,
} from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <LogoWrap>
        <img src="/logo.svg" alt="logo" height="64" width="172" />
      </LogoWrap>
      <StyledNav>
        <StyledLink to="/#about">About Us</StyledLink>
        <StyledLink to="/#portfolio">Portfolio</StyledLink>
        <StyledLink to="/#services">Services</StyledLink>
        <StyledLink to="/#team">Our Team</StyledLink>
        <StyledLink to="/#contacts">Contacts</StyledLink>
      </StyledNav>
      <SocialWrap>
        <SocialLink
          to="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </SocialLink>
        <SocialLink
          to="https://www.behance.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Behance
        </SocialLink>
      </SocialWrap>
    </Container>
  );
};

export default Header;
