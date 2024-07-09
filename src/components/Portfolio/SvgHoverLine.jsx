import * as React from "react";
import { motion } from "framer-motion";
import { MainBtn } from "./Portfolio.styled";

const outlineVariants = {
  default: {
    strokeWidth: 0,
    pathLength: 0,
    stroke: "grey",
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: {
    strokeWidth: 1.2,
    pathLength: 1,
    stroke: "#292929",
    transition: { duration: 1, ease: "easeOut" }
  }
};


 function SvgHoverLine() {
  return (
    <MainBtn>
      <motion.div
        whileHover="hover"
        initial="default"
        animate="default"
        className="hoverButton"
      >
        <motion.p className="hoverButtonText">
        Learn more
        </motion.p>
        <motion.svg viewBox="0 0 230 21" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            variants={outlineVariants}
            strokeWidth="1"
            fill="none"
            stroke= "#292929"
            d="M226.865 10.89c.046-.913-1.651-.848-2.201-1.075-2.941-.518-5.902-.811-8.859-1.216-7.065-.757-14.14-1.303-21.224-1.806-28.942-1.969-57.891-4.05-86.858-4.267 25.66-.863 51.339-1.447 77.027-.828 9.283.304 18.582.663 27.859 1.248 5.449.228 11.144 1.04 16.487.785-.012 0-.011.015-.023.016-10.452-1.93-21.064-1.943-31.607-2.55-17.676-.756-35.369-.88-53.045-.573-34.37.574-68.718 2.015-102.987 4.416-1.849.16-3.697.32-5.537.604-.4.015-.546.725-.156.921.867.415 1.837.024 2.73-.082 42.515-4.095 85.327-3.506 127.983-.583 18.178 1.337 36.396 2.012 54.508 4.347-71.496.308-143.13 1.089-214.266 8.61-9.72 1.463-7.267 1.738 1.15.828 72.645-7.853 146.39-7.622 219.019-8.795Z"
          />
        </motion.svg>
      </motion.div>
    </MainBtn>
  );
}

export default  SvgHoverLine
