import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  height: 801px;
  position: relative;
  padding: 140px 50px 0px 0px;
  overflow: hidden;
  div {
    padding: 0px 0px 0px 1170px;
  }
`;

export const TextBlack = styled(motion.svg)`
  position: absolute;
  top: 120px;
  left: 470px;
`;

export const TextPink = styled(motion.svg)`
  position: absolute;
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
