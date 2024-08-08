import styled from 'styled-components';
import { Link } from 'react-router-dom';

import mediaBp from '../../../styles/breakpoints';

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 100%;
  right: 0;
  left: 0;
  height: 100%;
  width: 100vw;

  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  padding: 120px 0px 0px 0px;
  z-index: 100;
  background: rgba(229, 1, 133, 0.35);
  -webkit-backdrop-filter: blur(32px);
  backdrop-filter: blur(32px);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
`;

export const StyledNav = styled.nav`
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
`;

export const StyledLink = styled.a`
  color: #fff;
  cursor: pointer;
  font-family: "Poppins";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  text-transform: uppercase;
  transition: color 1s;
  transition-timing-function: linear;
  &:hover {
    color: #E50185;
  }
  }
`;

export const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SocialLink = styled(Link)`
  color: #292929;
  font-family: Poppins;
  cursor: pointer;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  text-transform: uppercase;
`;
