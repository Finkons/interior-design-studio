import styled from 'styled-components';
import { motion } from 'framer-motion';
import mediaBp from './../../styles/breakpoints';

export const Container = styled.section`
  position: relative;
  height: 501px;
  ${mediaBp('tablet')} {
    height: 801px;
  }
  ${mediaBp('desktop')} {
    padding: 100px 50px 300px 0px;
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
export const StyledSvg = styled.svg`
  position: absolute;
  display: ${props => (props.mobile ? 'block' : 'none')};
  top: 10%;
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
    top: 30%;
    left: 0%;
    width: calc(1150px + (1800 - 1150) * ((100vw - 1100px) / (1920 - 1100)));
  }
`;
