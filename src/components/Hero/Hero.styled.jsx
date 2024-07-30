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
  top: 70px;
  left: 27%;
  width: 235px;
  height: 47px;
  ${mediaBp('tablet')} {
    top: 9%;
    left: 25%;
    width: 470px;
    height: 94px;
  }
  ${mediaBp('desktop')} {
    top: 14%;
    left: 470px;
    width: 940px;
    height: 188px;
  }
`;

export const TextPink = styled(motion.svg)`
  position: absolute;
  top: 250px;
  left: 53%;
  width: 138px;
  height: 54px;
  ${mediaBp('tablet')} {
    top: 25%;
    left: 75%;
    width: 220px;
    height: 85px;
  }
  ${mediaBp('desktop')} {
    top: 400px;
    left: 1470px;
    width: 394px;
    height: 150px;
  }
`;

export const TextWrap = styled.div`
  position: absolute;
  top: 240px;
  right: 210px;
  width: 150px;

  ${mediaBp('tablet')} {
    top: 340px;
    right: 300px;
    width: 200px;
  }
  ${mediaBp('desktop')} {
    top: 650px;
    left: 10px;
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

export const StyledOval = styled(motion.svg)`
  position: absolute;
  top: 210px;
  right: 0%;
  width: 270px;
  height: 151px;

  ${mediaBp('tablet')} {
    top: 140px;
    right: 2%;
    width: 350px;
    height: 245px;
  }
  ${mediaBp('desktop')} {
    top: 230px;
    left: 1350px;
    width: 560px;
    height: 490px;
  }
`;

export const StyledLine = styled(motion.svg)`
  position: absolute;
  width: 305px;
  height: 86px;
  top: 360px;
  right: 10%;
  ${mediaBp('tablet')} {
    top: 330px;
    left: 730px;
    width: 350px;
    height: 245px;
  }
  ${mediaBp('desktop')} {
    top: 690px;
    left: 1330px;
    width: 501px;
    height: 189px;
  }
`;

export const GrayStyledSvg = styled(motion.svg)`
  position: absolute;
  top: 50px;
  left: 0px;
  width: 350px;
  height: 148px;

  ${mediaBp('tablet')} {
    top: 10px;
    left: 40px;
    width: 699px;
    height: 296px;
  }
  ${mediaBp('desktop')} {
    top: 10px;
    left: 40px;
    width: 1397px;
    height: 592px;
  }
`;
