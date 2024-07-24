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
    strokeWidth: 1.8,
    pathLength: 1,
    stroke: "#292929",
    transition: { duration: 1, ease: "easeOut" }
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
        <motion.svg viewBox="0 0 366 28" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            variants={outlineVariants}
            strokeWidth="1.8"
            fill="none"
            stroke= "#292929"
           
         
          d="M365.2 7.3S246.7-.9 201.7 1C168.5 2.4 73.9 3.3 58.5 5.8c-.1 0-.1.2 0 .2 0 0 100.7-1.4 133.3-1.4 43.7 0 170.5 14.1 170.5 14.1s-148.7.4-198.2.3l-55 1.3L1 26.3"
          />
        </motion.svg>
      </motion.div>
    </MainBtn>
    </BtnBlock>
  );
}


export default  BtnContentBlock



