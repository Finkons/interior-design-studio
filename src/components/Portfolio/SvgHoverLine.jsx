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
              d="M363.5 7.7C307.3 3.5 232.2.3 143.2 3.5 89.7 5.4 59 8.6 59 9c0 .8 108.4-8 241 3.2 34.1 2.9 53 5.6 53 6.8-.2 2.8-111.9-7.8-256 .6-37.1 2.2-67.5 5.1-87.7 7.2"
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
