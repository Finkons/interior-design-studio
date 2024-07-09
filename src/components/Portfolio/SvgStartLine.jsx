import * as React from "react";
import { motion } from "framer-motion";
import { StartText, LineBox } from "./Portfolio.styled";

  const outlineVariants = {
    default: {
      strokeWidth: 0,
      pathLength: 0,
      fill: "none",
    },
    visible: {
      strokeWidth: 3,
      pathLength: 1,
      stroke: "#292929",
    },
  };

  const textVariants = {
    default: {
      color: "#E50185",
      fontSize: "0px",
      y: 0
    },
    visible: {
      color: "#E50185",
      fontSize: "150px",
      x: 55,
      transition: {
        duration: 0.5,
        delay: 1.8
      }
    }
  };

  function SvgStartLine() {
    return (
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          animate="default"
        >
          <StartText variants={textVariants}>
            Start
          </StartText>
          <LineBox viewBox="0 0 1220 327" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M4.005 254.251c-1.263-.107-.136 0-4.005-.251 126.5-13.5 152.544-8.299 277.5-5 151.5 4 517.143 57.608 517.143 57.608l5.417 2.372S447"
            fill="none"
            stroke="#292929"
            variants={outlineVariants}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.5
              }}
        />
          <motion.path
            d="M974.79,295.61c-56.97,10.79 -116.38,18.47 -174.58,13.21c80.74,30.37 190.93,8.09 261.33,-39.56c-12.82,5.17 -33.08,12.57 -46.32,16.37c-13.24,3.8 -26.95,7.2 -40.43,9.97zm35.19,-290.81c-39.1,4.48 -77.86,13.5 -114.61,27.76c-27.52,10.68 -55.9,22.38 -81.74,37.16c-25.55,14.47 -49.27,32.89 -69.88,54.83c-27.02,28.23 -41.76,63.29 -29.57,105.17c11.8,36.29 44.73,60.34 75.81,75.16c5.68,3.02 9.62,3.82 15.72,4.47c6.1,0.65 23.17,1.11 32.82,1.32c50.57,0.5 99.65,-7.36 148.97,-17.91c25.35,-5.96 50.44,-13.29 74.43,-23.86c18.35,-12.64 35.14,-28.47 50.17,-45.59c5.4,-6.34 23.8,-29.91 15.81,-19.42c-7.99,10.49 -16.73,21.42 -26.19,31.1c-9.46,9.68 -28.85,24.99 -39,33.54c25.95,-12.5 61.34,-33.16 83.23,-52.81c28.69,-24.13 52.52,-57.83 57.33,-98.46c6.02,-51.45 -28.75,-84.93 -70.06,-100.9c-39.76,-15.03 -82.24,-15.9 -123.24,-11.56z"
            fill="none"
            stroke="#292929"
            variants={outlineVariants}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.3
              }}
        />
          </LineBox>
        </motion.div>
      </div>
    );
  }
export default SvgStartLine
