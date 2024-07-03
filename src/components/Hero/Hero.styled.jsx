import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.section`
  height: 801px;
  position: relative;
  padding: 20px 50px 0px 0px;
  overflow: hidden;
  div {
    padding: 0px 0px 0px 1170px;
  }
`;

export const GrayText = styled(motion.p)`
  color: rgba(0, 0, 0, 0.15);
  // background: url('hero/texture.png') no-repeat center center;
  // background-size: cover;
  // color: black;
  // -webkit-text-fill-color: transparent;
  // -webkit-background-clip: text;
  // -moz-background-clip: text;
  // background-clip: text;
  text-align: left;
  font-family: Poppins;
  font-size: 400px;
  font-style: normal;
  font-weight: 800;
  line-height: 73%;
  letter-spacing: -23px;
  text-transform: uppercase;
`;

export const TextBlack = styled(motion.svg)`
  position: absolute;
  top: 120px;
  left: 470px;
`;

export const TextPink = styled(motion.svg)`
  position: absolute;
  z-index: 100;
  top: 370px;
  left: 1470px;
`;

export const Text = styled(motion.p)`
  position: absolute;
  top: 600px;
  width: 237px;
  color: #292929;
  text-align: justify;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 18.2px */
  letter-spacing: 0.7px;
  text-transform: uppercase;
`;

export const StyledOval = styled(motion.svg)`
  position: absolute;
  top: 220px;
  right: -10px;
`;

export const StyledLine = styled(motion.svg)`
  position: absolute;
  top: 680px;
  right: -50px;
`;

export const GraySvg = styled(motion.svg)`
  position: absolute;
  top: 80px;
  left: 470px;
`;
