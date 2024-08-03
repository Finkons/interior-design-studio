import * as React from 'react';
import { motion } from 'framer-motion';
import { StartText, LineBox, StartLineContainer } from './Footer.styled';

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

        <LineBox viewBox="0 0 950 740" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMin slice">
          <motion.path
            d="M243.3 515.6c12.3 23.2 31.2 53.6 59.5 84.9 36.4 40.2 71.8 63.5 85.9 72.4 52.2 32.6 98.7 44.5 109 47 94.6 23 235.7 15.1 281.4-65.1 2.6-4.5 12.1-22 14.2-46.3 5.4-61.6-41.9-110-86.4-154.4 0 0-122.9-122.5-309.7-166.9-4.3-1-17.9-4.2-36.3-6.3-25.2-2.8-132.4-11.8-179.6 47.7-3.1 3.9-5.1 7.1-5.7 8-23.9 37.8-12.3 84-7.5 102.7 24.7 98.2 168.9 185.2 179.6 191.6 82.1 48.6 156.8 66.2 209.3 78.1 59 13.4 109.7 18.5 146.4 20.4"
            fill="none"
            stroke="#292929"
            variants={outlineVariants}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              delay: 1.3,
            }}
          />
        </LineBox>
      </motion.div>
    </StartLineContainer>
  );
}
export default SvgStartLine;
