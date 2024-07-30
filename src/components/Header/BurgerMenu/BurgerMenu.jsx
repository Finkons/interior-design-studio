import React from 'react';
import { Container, StyledNav, StyledLink, SocialWrap, SocialLink } from './BurgerMenu.styled';

const BurgerMenu = ({ open, closeMenu }) => {
  return (
    <Container open={open}>
      <StyledNav>
        <StyledLink href="/#about" onClick={closeMenu}>
          About Us
        </StyledLink>
        <StyledLink href="/#portfolio" onClick={closeMenu}>
          Portfolio
        </StyledLink>
        <StyledLink href="/#services" onClick={closeMenu}>
          Services
        </StyledLink>
        <StyledLink href="/#team" onClick={closeMenu}>
          Our Team
        </StyledLink>
        <StyledLink href="/#contacts" onClick={closeMenu}>
          Contacts
        </StyledLink>
      </StyledNav>

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

export default BurgerMenu;
