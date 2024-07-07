import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mediaBp from './../../styles/breakpoints';

export const Container = styled.header`
  height: 35px;
  display: flex;
  flex-direction: row;
  // align-items: center;
  justify-content: space-between;
  padding: 59px 10px 0px 10px;
  ${mediaBp('tablet')} {
    height: 70px;
    padding: 25px 20px 0px 20px;
  }
  ${mediaBp('desktop')} {
    height: 139px;
    padding: 25px 40px 0px 40px;
  }
`;

export const LogoWrap = styled.div`
  margin-right: 20px;
  img {
    height: 36px;
    width: 104px;
    ${mediaBp('tablet')} {
      height: 54px;
      width: 162px;
    }
    ${mediaBp('desktop')} {
      height: 64px;
      width: 172px;
    }
  }
`;

export const StyledNav = styled.nav`
  gap: 20px;
  display: none;
  ${mediaBp('tablet')} {
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    gap: 30px;
    padding: 8px 0px 0px 0px;
  }
  ${mediaBp('desktop')} {
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    gap: 90px;
    padding: 8px 0px 0px 0px;
  }
`;

export const StyledLink = styled.a`
  color: #fff;
  cursor: pointer;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  text-transform: uppercase;
  &.active {
    color: #e50185;
  }
  ${mediaBp('tablet')} {
    font-size: 14px;
  }
  ${mediaBp('desktop')} {
    font-size: 20px;
  }
  }
`;

export const SocialWrap = styled.div`
  display: none;
   ${mediaBp('tablet')} {
     display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 8px 0px 0px 0px;
  }
  ${mediaBp('desktop')} {
  display: flex;
  gap: 100px;
  padding: 8px 0px 0px 0px;
`;

export const SocialLink = styled(Link)`
  color: #292929;
  font-family: Poppins;
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  text-transform: uppercase;
  ${mediaBp('tablet')} {
    font-size: 14px;
  }
  ${mediaBp('desktop')} {
    font-size: 20px;
  }
`;

export const BurgerBtn = styled.button`
  border: none;
  background-color: transparent;
  ${mediaBp('tablet')} {
    display: none;
  }
  ${mediaBp('desktop')} {
    display: none;
  }
`;
