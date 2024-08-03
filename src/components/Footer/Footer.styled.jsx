import styled from 'styled-components';
import { motion } from 'framer-motion';
import mediaBp from './../../styles/breakpoints';

export const Container = styled.section`
  position: relative;
  height: 601px;
  ${mediaBp('tablet')} {
    height: 801px;
  }
  ${mediaBp('desktop')} {
    padding: 0px 50px 200px 0px;
    height: 931px;
  }
`;

export const Path = styled(motion.path)`
  fill: ${props => (props.mobile ? '#505050' : 'transparent')};
  ${mediaBp('tablet')} {
    fill: ${props => (props.mobile ? 'transparent' : '#505050')};
  }
  ${mediaBp('desktop')} {
    fill: ${props => (props.mobile ? 'transparent' : '#505050')};
  }
`;
export const StyledSvg = styled(motion.svg)`
  position: absolute;
  display: ${props => (props.mobile ? 'block' : 'none')};
  top: 0%;
  left: 0%;
  width: calc(480px + (600 - 500) * ((100vw - 320px) / (600 - 320)));
  ${mediaBp('tablet')} {
    display: ${props => (props.tablet ? 'block' : 'none')};
    top: 30%;
    left: 0%;
    width: calc(700px + (1100 - 700) * ((100vw - 600px) / (1280 - 600)));
  }
  ${mediaBp('desktop')} {
    display: ${props => (props.tablet ? 'block' : 'none')};
    top: 22%;
    left: 0%;
    width: calc(1150px + (1800 - 1150) * ((100vw - 1100px) / (1920 - 1100)));
  }
`;
export const TextBlack = styled(motion.svg)`
  position: absolute;
  display: ${props => (props.mobile ? 'block' : 'none')};
  top: 22%;
  left: 12%;
  width: 250px;

  ${mediaBp('tablet')} {
    display: ${props => (props.tablet ? 'block' : 'none')};
    top: 40%;
    left: 15%;
    width: 400px;
  }
  ${mediaBp('desktop')} {
    display: ${props => (props.tablet ? 'block' : 'none')};
    top: 35%;
    left: 19%;
    width: calc(650px + (1000 - 650) * ((100vw - 1280px) / (1920 - 1280)));
  }
`;
// Start Line

export const StartLineContainer = styled.div`
  position: relative;

  &:before {
    content: '';
    display: block;
    padding-bottom: 15%; /* initial ratio of 1:1*/
  }
`;
export const StartText = styled(motion.p)`
  font-size: calc(55px + (160 - 55) * ((100vw - 320px) / (1920 - 320)));
  position: absolute;
  color: #e50185;
  font-family: 'PhontPhreaksHandwriting';

  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 150px */
  letter-spacing: 6.5px;
  text-transform: uppercase;
  top: calc(320px + (700 - 320) * ((100vw - 320px) / (1920 - 320)));
  left: 42%;

  ${mediaBp('tablet')} {
    left: 67%;
    top: calc(400px + (600 - 400) * ((100vw - 768px) / (1920 - 768)));
  }
  ${mediaBp('desktop')} {
    top: calc(600px + (760 - 600) * ((100vw - 1280px) / (1920 - 1280)));
    left: 76%;
  }
`;
export const LineBox = styled(motion.svg)`
  overflow: hidden;
  width: calc(380px + (600 - 380) * ((100vw - 320px) / (780 - 320)));
  position: absolute;
  top: calc(150px + (180 - 150) * ((100vw - 320px) / (768 - 320)));
  left: calc(30px + (180 - 30) * ((100vw - 320px) / (768 - 320)));
  ${mediaBp('tablet')} {
    width: 58%;
    top: 230px;
    left: 56%;
  }
  ${mediaBp('desktop')} {
    width: 50%;
    top: 320px;
    left: 63%;
  }
`;
// contacts block

export const ContactContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: absolute;
  align-items: flex-start;
  padding: 0px 0px 20px 10px;
  bottom: 0%;
  ${mediaBp('desktop')} {
    padding: 0 0px 80px 40px;
    bottom: 2%;
  }
`;
export const ContactItem = styled.li`
  gap: 6px;
  ${mediaBp('desktop')} {
    gap: 8px;
  }
`;
export const ContactTitle = styled.p`
  color: #fff;

  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  padding-bottom: 6px;
  ${mediaBp('tablet')} {
    font-size: 20px;
  }
  ${mediaBp('desktop')} {
    font-size: 20px;
    padding-bottom: 8px;
  }
`;
export const ContactLink = styled.a`
  color: #fff;
  padding-bottom: 4px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%; /* 24px */
  text-transform: uppercase;
  ${mediaBp('desktop')} {
    font-size: 16px;
    padding-bottom: 8px;
  }
  & > span {
    text-decoration: underline;
  }
`;
