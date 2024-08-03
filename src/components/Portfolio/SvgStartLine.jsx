import * as React from 'react';
import { motion } from 'framer-motion';
import { StartText, LineBox, StartLineContainer } from './Portfolio.styled';

const outlineVariants = {
  default: {
    strokeWidth: 0,
    pathLength: 0,
    fill: 'none',
  },
  visible: {
    strokeWidth: 3,
    pathLength: 1,
    stroke: '#292929',
  },
};

const textVariants = {
  default: {
    color: '#E50185',
    scale: 0,
  },
  visible: {
    color: '#E50185',
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 1.8,
    },
  },
};

function SvgStartLine() {
  return (
    <StartLineContainer>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} animate="default">
        <StartText variants={textVariants}>Start</StartText>
        <LineBox viewBox="0 0 1220 327" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M1.7 254.1c20.8-2.1 49.6-4.5 84-5.8 14.3-.5 37.8-1.2 86.3-.4 130 2.1 221.6 10.8 244.3 13 12.5 1.2 21.2 2.2 32 3.3 131.4 14.2 198.6 27.1 329.3 41.6 29.9 3.3 78.1 8.4 141.4 1.3 8.4-.9 22-2.5 39.7-5.8 14.9-2.8 151.2-30 217.4-117.2 3.6-4.8 9.5-12.9 14.7-24.4 3-6.6 25.3-57.3.9-98.5-3.2-5.5-6.3-9.1-8.5-11.7-49.8-58.2-157-46.6-177.5-44-12.2 1.6-20.5 3.4-33 6.1-49.9 10.8-121.3 27.1-185.9 78.8-25.2 20.2-63.2 51.4-68.6 99-.4 3.7-1 8.7-.6 15.6 3.3 53.5 58.2 93.1 100.5 108.8 29.4 10.9 55 10.9 75.6 11 12.1 0 42-.7 78.7-11.3 24.5-7 104.7-33.6 156.4-109.6 5.3-7.8 9.2-14.5 11.8-19.2"
            fill="none"
            stroke="#292929"
            variants={outlineVariants}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              delay: 0.5,
            }}
          />
        </LineBox>
      </motion.div>
    </StartLineContainer>
  );
}
export default SvgStartLine;
