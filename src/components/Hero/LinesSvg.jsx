import React from 'react';
import { motion } from 'framer-motion';
import { StyledOval, StyledLine } from './Hero.styled';
import { useState } from 'react';
import PinkTextSvg from './PinkTextSvg';

const drawLines = {
  hidden: { strokeWidth: 0, pathLength: 0, transition: { duration: 0.1, ease: 'easeOut' } },
  visible: i => {
    const delay = 1 + i * 0.5;
    return {
      strokeWidth: 3,
      pathLength: 1,
      stroke: '#292929',
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
  hover: {
    strokeWidth: 3,
    pathLength: 1,
    stroke: '#292929',
    transition: { duration: 3, ease: 'easeOut' },
  },
};

const LinesSvg = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        initial="hidden"
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ background: 'transparent', border: 'none' }}
      >
        {isHovered === false && (
          <>
            <StyledOval
              initial="hidden"
              animate="visible"
              width="552"
              height="458"
              viewBox="0 0 950 740"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M243.3 515.6c12.3 23.2 31.2 53.6 59.5 84.9 36.4 40.2 71.8 63.5 85.9 72.4 52.2 32.6 98.7 44.5 109 47 94.6 23 235.7 15.1 281.4-65.1 2.6-4.5 12.1-22 14.2-46.3 5.4-61.6-41.9-110-86.4-154.4 0 0-122.9-122.5-309.7-166.9-4.3-1-17.9-4.2-36.3-6.3-25.2-2.8-132.4-11.8-179.6 47.7-3.1 3.9-5.1 7.1-5.7 8-23.9 37.8-12.3 84-7.5 102.7 24.7 98.2 168.9 185.2 179.6 191.6 82.1 48.6 156.8 66.2 209.3 78.1 59 13.4 109.7 18.5 146.4 20.4"
                fill="none"
                id="svg_1"
                stroke="#292929"
                variants={drawLines}
                custom={1}
              />
            </StyledOval>
          </>
        )}

        <StyledOval width="552" height="458" viewBox="0 0 950 740" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M243.3 515.6c12.3 23.2 31.2 53.6 59.5 84.9 36.4 40.2 71.8 63.5 85.9 72.4 52.2 32.6 98.7 44.5 109 47 94.6 23 235.7 15.1 281.4-65.1 2.6-4.5 12.1-22 14.2-46.3 5.4-61.6-41.9-110-86.4-154.4 0 0-122.9-122.5-309.7-166.9-4.3-1-17.9-4.2-36.3-6.3-25.2-2.8-132.4-11.8-179.6 47.7-3.1 3.9-5.1 7.1-5.7 8-23.9 37.8-12.3 84-7.5 102.7 24.7 98.2 168.9 185.2 179.6 191.6 82.1 48.6 156.8 66.2 209.3 78.1 59 13.4 109.7 18.5 146.4 20.4"
            fill="none"
            id="svg_1"
            stroke="#292929"
            variants={drawLines}
            custom={3}
          />
        </StyledOval>
      </motion.button>

      <PinkTextSvg />

      <StyledLine width="465" height="190" viewBox="0 0 465 190" fill="none" xmlns="http://www.w3.org/2000/svg" initial="hidden" animate="visible">
        <g>
          <motion.path
            d="M563.1.6c-76.3 6.1-179.3 16.7-300.7 36.3C156.9 54 84.3 70.4 84.3 70.3c0 0 95.5-22.8 220.7-36 47.4-5 42.8-2.7 102-8.9 0 0 50.3-5.2 137.5-8.2 3.5-.1 9.5-.3 9.5.2.3 3.3-205.8 25.5-356.9 51.3-37.8 6.5-70.2 12.8-76 13.9-95.8 19-118.6 25.9-118.6 25.9s71.5 3.4 180.9 18.9c5.7.8 9.6 1.4 15.6 2.3 99.2 14.8 163 28.8 163 29.2-.1.6-112.6-20.8-198.3-28-1.5-.1-5.1-.4-9.7-.8-16.8-1.3-45.4-3.5-113.6-7-27.7-1.4-34.7-1.1-34.7-1.1s31.1 4.5 42.9 5.9c48.7 5.6 88.4 11.6 167.6 23.5 49.2 7.4 118.6 18.9 205.5 36.4"
            stroke="#292929"
            strokeWidth="2"
            variants={drawLines}
            custom={4}
          />
        </g>
      </StyledLine>
    </>
  );
};

export default LinesSvg;
