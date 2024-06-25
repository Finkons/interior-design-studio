import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Container = styled.header`
  height: 139px;
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  padding: 25px 40px 0px 40px;
`;

export const LogoWrap = styled.div`
  margin-right: 184px;
`;

export const StyledNav = styled.nav`
  display: flex;
  margin-right: 246px;
  flex-direction: row;
  gap: 95px;
  padding: 8px 0px 0px 0px;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  cursor: pointer;
  font-family: "Poppins";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  text-transform: uppercase;

  &.active {
    color: #e50185;
  }
`;

export const SocialWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  padding: 8px 0px 0px 0px;
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
