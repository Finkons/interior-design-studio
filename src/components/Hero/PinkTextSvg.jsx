import React from 'react';
import { motion } from 'framer-motion';
import { TextPink } from './Hero.styled';

const pathVariants = {
  start: {
    pathLength: 0,
  },
  finish: i => {
    const delay = 1 + i * 0.9;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 7, bounce: 0 },
        opacity: { delay, duration: 0.2 },
      },
    };
  },
};

const PinkTextSvg = () => {
  return (
    <>
      <TextPink width="424" height="129" viewBox="0 0 424 129" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask id="pink-mask">
            <motion.path
              d="M60.15 23.4L63.3 26.55V30.9L50.7 27.6L40.35 34.2L39.3 38.85L59.1 59.4L67.35 79.2V82.35C67.35 93.05 62.9 101.8 54 108.6L41.7 112.95L25.5 111.9L14.1 106.2L5.7 106.5L0 97.5L1.5 92.4H5.7C14.4 101.6 23.8 106.2 33.9 106.2C39.1 106.2 44.7 104.85 50.7 102.15C57.2 95.85 60.45 89.1 60.45 81.9C60.45 77.5 59.15 72.85 56.55 67.95L30.6 39.15L33.45 30.9L49.35 21.6L60.15 23.4ZM177.183 23.25L181.833 27.3L180.333 32.25C173.933 30.95 167.333 30.3 160.533 30.3C150.333 30.3 140.283 31.8 130.383 34.8C116.783 59.1 106.333 84.4 99.0328 110.7L94.9828 114L90.7828 111.9C92.8828 94.1 99.9328 77.9 111.933 63.3L119.583 38.1L85.9828 44.55L73.3828 49.5L66.9328 57.45L60.4828 54.3V51C79.4828 36.7 101.583 29 126.783 27.9L163.833 23.25H177.183ZM227.851 1.49999L231.001 7.95V10.8C231.001 30.5 226.801 49.35 218.401 67.35V69.45H224.251L226.051 74.55C209.751 77.65 202.051 89.65 202.951 110.55L200.401 128.55L195.451 126.45L194.701 119.55L206.251 84.6L205.501 80.25L177.451 87.45L165.901 113.1L161.251 114.9L158.701 111.6L171.001 81L201.601 17.25L209.401 7.2L222.451 -7.51019e-06L227.851 1.49999ZM202.951 31.05L181.801 76.05L183.151 77.85L210.601 71.25C218.301 54.85 223.101 37.85 225.001 20.25L224.251 9.74999L220.951 7.95L202.951 31.05ZM296.464 9.59999L306.664 25.8C307.064 27.7 307.264 29.7 307.264 31.8C307.264 44.6 301.514 54.95 290.014 62.85L277.864 69.3L299.014 115.35L297.214 121.5L290.764 118.2L267.664 67.5C254.464 80.2 245.714 94.95 241.414 111.75L238.864 114.3L234.964 112.8L236.464 106.8C254.264 82.7 268.764 56.5 279.964 28.2L277.864 19.95L282.514 10.95L286.864 7.8L296.464 9.59999ZM284.314 18.6L288.964 21V26.4L270.964 59.25L272.764 62.85C284.164 61.35 292.664 54.75 298.264 43.05L300.514 33.3L297.214 21.75L288.214 15L284.314 18.6ZM419.263 23.25L423.913 27.3L422.413 32.25C416.013 30.95 409.413 30.3 402.613 30.3C392.413 30.3 382.363 31.8 372.463 34.8C358.863 59.1 348.413 84.4 341.113 110.7L337.063 114L332.863 111.9C334.963 94.1 342.013 77.9 354.013 63.3L361.663 38.1L328.063 44.55L315.463 49.5L309.013 57.45L302.563 54.3V51C321.563 36.7 343.663 29 368.863 27.9L405.913 23.25H419.263Z"
              stroke="white"
              strokeWidth="10"
              fill="none"
              variants={pathVariants}
              initial="start"
              animate="finish"
              custom={2}
            />
          </mask>
        </defs>
        <motion.path
          d="M60.15 23.4L63.3 26.55V30.9L50.7 27.6L40.35 34.2L39.3 38.85L59.1 59.4L67.35 79.2V82.35C67.35 93.05 62.9 101.8 54 108.6L41.7 112.95L25.5 111.9L14.1 106.2L5.7 106.5L0 97.5L1.5 92.4H5.7C14.4 101.6 23.8 106.2 33.9 106.2C39.1 106.2 44.7 104.85 50.7 102.15C57.2 95.85 60.45 89.1 60.45 81.9C60.45 77.5 59.15 72.85 56.55 67.95L30.6 39.15L33.45 30.9L49.35 21.6L60.15 23.4ZM177.183 23.25L181.833 27.3L180.333 32.25C173.933 30.95 167.333 30.3 160.533 30.3C150.333 30.3 140.283 31.8 130.383 34.8C116.783 59.1 106.333 84.4 99.0328 110.7L94.9828 114L90.7828 111.9C92.8828 94.1 99.9328 77.9 111.933 63.3L119.583 38.1L85.9828 44.55L73.3828 49.5L66.9328 57.45L60.4828 54.3V51C79.4828 36.7 101.583 29 126.783 27.9L163.833 23.25H177.183ZM227.851 1.49999L231.001 7.95V10.8C231.001 30.5 226.801 49.35 218.401 67.35V69.45H224.251L226.051 74.55C209.751 77.65 202.051 89.65 202.951 110.55L200.401 128.55L195.451 126.45L194.701 119.55L206.251 84.6L205.501 80.25L177.451 87.45L165.901 113.1L161.251 114.9L158.701 111.6L171.001 81L201.601 17.25L209.401 7.2L222.451 -7.51019e-06L227.851 1.49999ZM202.951 31.05L181.801 76.05L183.151 77.85L210.601 71.25C218.301 54.85 223.101 37.85 225.001 20.25L224.251 9.74999L220.951 7.95L202.951 31.05ZM296.464 9.59999L306.664 25.8C307.064 27.7 307.264 29.7 307.264 31.8C307.264 44.6 301.514 54.95 290.014 62.85L277.864 69.3L299.014 115.35L297.214 121.5L290.764 118.2L267.664 67.5C254.464 80.2 245.714 94.95 241.414 111.75L238.864 114.3L234.964 112.8L236.464 106.8C254.264 82.7 268.764 56.5 279.964 28.2L277.864 19.95L282.514 10.95L286.864 7.8L296.464 9.59999ZM284.314 18.6L288.964 21V26.4L270.964 59.25L272.764 62.85C284.164 61.35 292.664 54.75 298.264 43.05L300.514 33.3L297.214 21.75L288.214 15L284.314 18.6ZM419.263 23.25L423.913 27.3L422.413 32.25C416.013 30.95 409.413 30.3 402.613 30.3C392.413 30.3 382.363 31.8 372.463 34.8C358.863 59.1 348.413 84.4 341.113 110.7L337.063 114L332.863 111.9C334.963 94.1 342.013 77.9 354.013 63.3L361.663 38.1L328.063 44.55L315.463 49.5L309.013 57.45L302.563 54.3V51C321.563 36.7 343.663 29 368.863 27.9L405.913 23.25H419.263Z"
          fill="#E50185"
          mask="url(#pink-mask)"
        />
      </TextPink>
    </>
  );
};

export default PinkTextSvg;