import * as React from 'react';
import { motion } from 'framer-motion';
import { MainBtn, BtnText, BtnBlock, ColoredText, Content, BlurContent, Wrapper, ContentWrapper } from './BtnContentBlock.styled';

const outlineVariants = {
  default: {
    strokeWidth: 0,
    pathLength: 0,
    stroke: 'grey',
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hover: {
    strokeWidth: 2,
    pathLength: 1,
    stroke: '#292929',
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};
const contentVariants = {
  default: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 10,
      delay: 0.5,
    },
  },
};

function BtnContentBlock() {
  return (
    <BtnBlock>
      <ContentWrapper>
        <Wrapper>
          <Content variants={contentVariants} whileInView="visible" initial="default" animate="default" viewport={{ once: true }}>
            With our <ColoredText>expertise</ColoredText> and <ColoredText>attention</ColoredText> to detail, we can create a space that is both{' '}
            <BlurContent>functional</BlurContent> and <BlurContent>visually stunning</BlurContent>
          </Content>
        </Wrapper>
        <Content variants={contentVariants} whileInView="visible" initial="default" animate="default" viewport={{ once: true }}>
          Whether you're looking to <BlurContent>revamp your home</BlurContent> or <BlurContent>office</BlurContent>, our team of talented designers
          will work closely with you<ColoredText> to bring your vision to life</ColoredText>
        </Content>
      </ContentWrapper>
      <MainBtn>
        <motion.div whileHover="hover" initial="default" animate="default">
          <BtnText>Contact Us</BtnText>
          <motion.svg viewBox="0 0 366 28" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              variants={outlineVariants}
              strokeWidth="2"
              fill="none"
              stroke="#292929"
              d="M363.5 7.7C307.3 3.5 232.2.3 143.2 3.5 89.7 5.4 59 8.6 59 9c0 .8 108.4-8 241 3.2 34.1 2.9 53 5.6 53 6.8-.2 2.8-111.9-7.8-256 .6-37.1 2.2-67.5 5.1-87.7 7.2"
            />
          </motion.svg>
        </motion.div>
      </MainBtn>
    </BtnBlock>
  );
}

export default BtnContentBlock;
