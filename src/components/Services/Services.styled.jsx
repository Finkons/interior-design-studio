import styled from 'styled-components';
import { motion } from 'framer-motion';
import mediaBp from '../../styles/breakpoints';

// 1920 = 100vw
// 1920 - 400 = 1520 = 79vw
// 1366 = 71vw
// 1080 = 56vw
// 1024 = 53vw
// 768 = 40vw
// 478 = 25vw
// 564 = 29vw
// 320 = 16vw
// 375 = 19vw
// 456-340 = 23vw
//190 = 10vw

export const SectionConteiner = styled.section`
  position: relative;
  margin-top: 10vw;
`;

export const ServicesBlock = styled(motion.div)`
  margin: 0 auto;
`;

export const StyledNetSvg = styled(motion.svg)`
  width: 100%;
  height: auto;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  list-style: none;
  width: 23%;
`;
