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
  left: 59%;
  width: 168px;
  height: 64px;
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

export const Text = styled(motion.p)`
  position: absolute;
  top: 250px;
  left: 30px;
  width: 130px;
  color: #292929;
  text-align: justify;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 18.2px */
  letter-spacing: 0.7px;
  text-transform: uppercase;
  ${mediaBp('tablet')} {
    top: 350px;
    left: 500px;
    width: 200px;
    font-size: 14px;
  }
  ${mediaBp('desktop')} {
    top: 650px;
    left: 1150px;
    width: 237px;
    font-size: 14px;
  }
`;

export const StyledOval = styled(motion.svg)`
  position: absolute;
  top: 200px;
  right: -15%;
  width: 320px;
  height: 181px;

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
  width: 345px;
  height: 116px;
  top: 370px;
  right: -50px;
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

export const GraySvg = styled(motion.svg)`
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
