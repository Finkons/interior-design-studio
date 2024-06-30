import styled from "styled-components";
import { Link } from "react-router-dom";
import mediaBp from "./../../styles/breakpoints";

export const Container = styled.header`
  height: 139px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 40px 0px 40px;
`;

export const LogoWrap = styled.div`
  // margin-right: 184px;
`;

export const StyledNav = styled.nav`
  display: flex;
  // margin-right: 246px;
  flex-direction: row;
  gap: 95px;
  padding: 8px 0px 0px 0px;
  ${mediaBp("tablet")} {
    gap: 40px;
  }
  ${mediaBp("mobile")} {
    gap: 20px;
  }
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
  &.active {
    color: #e50185;
  }
  ${mediaBp("tablet")} {
    font-size: 14px;
  }
  ${mediaBp("mobile")} {
    font-size: 14px;
  }
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
  ${mediaBp("tablet")} {
    font-size: 14px;
  }
  ${mediaBp("mobile")} {
    font-size: 14px;
  }
`;
