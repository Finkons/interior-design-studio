import styled from 'styled-components';
import { motion } from 'framer-motion';
import mediaBp from '../../styles/breakpoints';

export const Paragraph = styled.p`
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: 100%; /* 60px */
  letter-spacing: 6px;
  margin-bottom: 20px;
  text-transform: uppercase;
  ${mediaBp('tablet')} {
    font-size: 48px;
  }
  ${mediaBp('desktop')} {
    font-size: 60px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(239, 239, 239, 1);
  background-repeat: no-repeat;
  height: 100vh;
  margin: -10px;
`;

export const ProgressBarContainer = styled.div`
  width: 310px;
  height: 16px;
  border-radius: 12px;
  background-color: #fdf6f6;
`;

export const ProgressBar = styled.div`
  width: ${props => `calc(${props.progress}px*3.1)`};
  background-color: #2e2e2e;
  height: 8px;
  border-radius: 12px;
  ${mediaBp('tablet')} {
    height: 8px;
  }
  ${mediaBp('desktop')} {
    height: 16px;
  }
`;

export const Logo = styled(motion.div)`
  margin-top: 50px;
  width: 350px;
  height: 148px;
  background-image: url('preloader/Logo2.png');
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  width: ${props => `calc(${props.progress}px*3.1)`};
  ${mediaBp('tablet')} {
    width: 699px;
    height: 296px;
  }
  ${mediaBp('desktop')} {
    width: 1370px;
    height: 572px;
  }
`;
