import * as React from "react";
import { motion } from "framer-motion";
import { MainBtn, BtnText, BtnBlock, ColoredText, Content, BlurContent, Wrapper, ContentWrapper } from "./BtnContentBlock.styled";


const outlineVariants = {
  default: {
    strokeWidth: 0,
    pathLength: 0,
    stroke: "grey",
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: {
    strokeWidth: 1.5,
    pathLength: 1,
    stroke: "#292929",
    transition: { duration: 2, ease: "easeOut" }
  }
};
const contentVariants = {
  default:{ opacity: 0, y: 50 },
    visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  }};

function BtnContentBlock() {
  return (
    <BtnBlock>
     < ContentWrapper>
<Wrapper>
      <Content
      variants={contentVariants}
      whileInView="visible"
      initial="default"
      animate="default"
      viewport={{ once: true }}
      >
      With our <ColoredText>expertise</ColoredText> and <ColoredText>attention</ColoredText> to detail, we can create a space that is both{' '}
      <BlurContent>functional</BlurContent> and <BlurContent>visually stunning</BlurContent>
   
    </Content>
    </Wrapper>
    <Content
      variants={contentVariants}
      whileInView="visible"
      initial="default"
      animate="default"
      viewport={{ once: true }}
      >
      Whether you're looking to <BlurContent>revamp your home</BlurContent> or <BlurContent>office</BlurContent>, our team of talented designers
      will work closely with you<ColoredText> to bring your vision to life</ColoredText>
   
    </Content>
    </ContentWrapper>
    <MainBtn>
      <motion.div
        whileHover="hover"
        initial="default"
        animate="default"
      >
        <BtnText>
        Contact Us
        </BtnText>
        <motion.svg viewBox="0 0 364 29" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            variants={outlineVariants}
            strokeWidth="1"
            fill="none"
            stroke= "#292929"
           
         
          d="M12 1.9C9.2.1 336 .7 356.4 5c0 0-134.3 1-179.8 1.7-29 .5-135.8 4.5-135.8 4.5s109.5 4.5 138.8 6.2c44.9 2.7 179.2 8.7 179.2 8.7s-66.3-4.2-140.5-4.5C116 21.4-4 24.7.5 27"
          />
        </motion.svg>
      </motion.div>
    </MainBtn>
    </BtnBlock>
  );
}


export default  BtnContentBlock



