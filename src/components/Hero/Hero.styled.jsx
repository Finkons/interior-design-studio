import styled from 'styled-components';
import { motion } from 'framer-motion';
import mediaBp from '../../styles/breakpoints';

export const Container = styled.section`
  height: 501px;
  position: relative;
  padding: 20px 50px 0px 0px;
  overflow: hidden;
  div {
    padding: 0px 0px 0px 1170px;
  }
  ${mediaBp('tablet')} {
    height: 801px;
  }
  ${mediaBp('desktop')} {
    height: 931px;
  }
`;

export const TextBlack = styled(motion.svg)`
  position: absolute;
  top: 80px;
  left: 27%;
  width: 59vw;
  height: auto;
  ${mediaBp('tablet')} {
    top: 9%;
    left: 25%;
    width: 49vw;
    height: auto;
  }
  ${mediaBp('desktop')} {
    top: 14%;
    left: 470px;

    width: 49vw;
    height: auto;
  }
`;

export const TextPink = styled(motion.svg)`
  position: absolute;
  top: 250px;
  left: 53%;
  width: 138px;
  height: 54px;
  ${mediaBp('tablet')} {
    top: 26%;
    left: 730px;
    width: 220px;
    height: 85px;
  }
  ${mediaBp('desktop')} {
    // top: 435px;
    // top: 48%;
    top: 49vh;
    left: 73vw;
    // width: 394px;
    width: 21vw;
    height: auto;
  }
`;

export const StyledOval = styled(motion.svg)`
  position: absolute;
  top: 130px;
  right: -17%;
  width: 340px;
  height: 221px;

  ${mediaBp('tablet')} {
    top: 10px;
    left: 59vw;
    // width: 460px;
    // height: 355px;
    width: 46vw;
    height: auto;
  }
  ${mediaBp('desktop')} {
    top: 1%;
    left: 59vw;
    // left: 1100px;
    // width: 890px;
    width: 46vw;
    height: auto;
  }
`;

export const StyledLine = styled(motion.svg)`
  position: absolute;
  width: 195px;
  height: 86px;
  top: 340px;
  right: 10%;
  ${mediaBp('tablet')} {
    top: 310px;
    left: 600px;
    width: 330px;
    height: 225px;
  }
  ${mediaBp('desktop')} {
    // top: 690px;
    // left: 1230px;
    top: 36vw;
    left: 64vw;
    width: 501px;
    height: 189px;
  }
`;

export const GrayStyledSvg = styled(motion.svg)`
  position: absolute;
  top: 50px;
  left: 0px;
  // width: 350px;
  // height: 148px;
  width: 100vw;
  height: auto;

  ${mediaBp('tablet')} {
    top: 10px;
    left: 40px;
    // width: 699px;
    // height: 296px;
    width: 73vw;
    height: auto;
  }
  ${mediaBp('desktop')} {
    top: 10px;
    left: 40px;
    // width: 1397px;
    // height: 592px;
    width: 73vw;
    height: auto;
  }
`;

export const TextWrap = styled.div`
  position: absolute;
  top: 240px;
  right: 210px;
  width: 150px;

  ${mediaBp('tablet')} {
    top: 340px;
    right: 50%;
    width: 200px;
  }
  ${mediaBp('desktop')} {
    top: 650px;
    left: -25px;
    width: 237px;
  }
`;
export const Text = styled(motion.p)`
  color: #292929;
  font-family: Poppins;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 18.2px */
  letter-spacing: 0.7px;
  text-transform: uppercase;
  margin: 1px 0;

  ${mediaBp('tablet')} {
    font-size: 13px;
  }
  ${mediaBp('desktop')} {
    font-size: 14px;
  }
`;
