import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mediaBp from './../../styles/breakpoints';

export const Container = styled.header`
  height: 35px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: space-between;
  padding: 29px 10px 0px 10px;
  ${mediaBp('tablet')} {
    flex-direction: row;
    height: 70px;
    padding: 25px 20px 0px 20px;
  }
  ${mediaBp('desktop')} {
    flex-direction: row;
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
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  ${mediaBp('tablet')} {
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    margin-bottom: 0px;
    gap: 30px;
    padding: 8px 0px 0px 0px;
  }
  ${mediaBp('desktop')} {
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    gap: 90px;
    margin-bottom: 0px;
    padding: 8px 0px 0px 0px;
  }
`;

export const StyledLink = styled.a`
  color: #fff;
  cursor: pointer;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  text-transform: uppercase;
  transition: color 1s;
  transition-timing-function: linear;
  &:hover {
    color: #E50185;
  }
  ${mediaBp('tablet')} {
    font-size: 0.73vw;
  }
  ${mediaBp('desktop')} {
    font-size: 1vw;
  }
  }
`;

export const SocialWrap = styled.div`
  display: none;
  flex-direction: column;
  gap: 10px;
   ${mediaBp('tablet')} {
     display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 8px 0px 0px 0px;
  }
  ${mediaBp('desktop')} {
  display: flex;
  flex-direction: row;
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
    font-size: 0.73vw;
  }
  ${mediaBp('desktop')} {
    font-size: 1vw;
  }
`;

export const BurgerBtn = styled.button`
  border: none;
  position: absolute;
  left: 80%;
  background-color: transparent;
  ${mediaBp('tablet')} {
    display: none;
  }
  ${mediaBp('desktop')} {
    display: none;
  }
`;
