import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Paragraph = styled.p`
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 900;
  line-height: 100%; /* 60px */
  letter-spacing: 6px;
  margin-bottom: 20px;

  text-transform: uppercase;
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
  height: 16px;
  border-radius: 12px;
`;

export const Logo = styled(motion.div)`
  margin-top: 50px;
  width: 1370px;
  height: 572px;
  background-image: url('preloader/Logo2.png');
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  width: ${props => `calc(${props.progress}px*3.1)`};
`;
