import * as React from 'react';
import { motion } from 'framer-motion';
import { MainBtn, BtnBlock, ColoredText, Content, BlurContent, BtnText } from './Portfolio.styled';

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
      duration: 1,
      delay: 0.5,
    },
  },
};

function ContentBtnBlock({ num }) {
  const items = contentItems[num];
  return (
    <BtnBlock>
      <Content variants={contentVariants} whileInView="visible" initial="default" animate="default" viewport={{ once: true }}>
        {
          <>
            {items.main_first}
            <ColoredText>{items.pink_first}</ColoredText>
            {items.main_second}
            <BlurContent>{items.gray}</BlurContent>
            {items.main_third}
            <ColoredText>{items.pink_second}</ColoredText>
            {items.main_four}
            <BlurContent>{items.gray_second}</BlurContent>
          </>
        }
      </Content>
      <MainBtn>
        <motion.div whileHover="hover" initial="default" animate="default">
          <BtnText>Learn more</BtnText>
          <motion.svg viewBox="0 0 366 28" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              variants={outlineVariants}
              strokeWidth="2"
              fill="none"
              stroke="#292929"
              d="M365.2 7.3S246.7-.9 201.7 1C168.5 2.4 73.9 3.3 58.5 5.8c-.1 0-.1.2 0 .2 0 0 100.7-1.4 133.3-1.4 43.7 0 170.5 14.1 170.5 14.1s-148.7.4-198.2.3l-55 1.3L1 26.3"
            />
          </motion.svg>
        </motion.div>
      </MainBtn>
    </BtnBlock>
  );
}
const contentItems = [
  {
    main_first: 'A me`s bedroom in the ',
    pink_first: 'neoclassical style',
    main_second: ' with elements of a stone wall creates an atmosphere of ',
    gray: 'masculinity and elegance.',
    main_third: ' Soft colors, a sophisticated furniture ensemble and the addition of stone details create a cozy',
    pink_second: ' place for relaxation.',
    main_four: '',
    gray_second: '',
  },
  {
    main_first: "The design of a children's room in the  ",
    pink_first: 'style of romanticism',
    main_second: ' is a passion for  ',
    gray: 'dreams and tenderness,',
    main_third: ' where every detail speaks of grace and peace. The color range in coffee-beige tones creates an atmosphere of',
    pink_second: ' warmth and coziness, ',
    main_four: 'complementing the stylish elements of the interior.',
    gray_second: '',
  },
  {
    main_first: 'Ukrainian cuisine:   ',
    pink_first: 'traditional embroideries,',
    main_second: ' wooden furniture with carvings, ceramic tiles with  ',
    gray: 'Ukrainian ornaments.',
    main_third: ' A stove or fireplace creates warmth and atmosphere.',
    pink_second: ' Open shelves for dishes. ',
    main_four: 'Decorative textile products emphasize the Ukrainian theme, creating',
    gray_second: ' coziness and traditionality.',
  },
];

export default ContentBtnBlock;
