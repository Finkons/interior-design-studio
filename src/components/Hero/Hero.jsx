import React from 'react';
import { Container, Text, TextWrap } from './Hero.styled';
import GraySvg from './GraySvg';
import BlackTextSvg from './BlackTextSvg';
import PinkTextSvg from './PinkTextSvg';
import LinesSvg from './LinesSvg';

// const svgVariants = {
//   hidden: { rotate: -180 },
//   visible: {
//     rotate: 0,
//     transition: { duration: 5 },
//   },
// };

const Hero = () => {
  return (
    <Container>
      <GraySvg />
      <BlackTextSvg />
      <PinkTextSvg />
      <LinesSvg />

      <TextWrap>
        <Text
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
              delay: 2,
            },
          }}
          viewport={{ once: true }}
        >
          Where every corner is
        </Text>
        <Text
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
              delay: 2.2,
            },
          }}
          viewport={{ once: true }}
        >
          canvas for your story.
        </Text>
        <Text
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
              delay: 2.4,
            },
          }}
          viewport={{ once: true }}
        >
          Stripped - back design is
        </Text>
        <Text
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
              delay: 2.6,
            },
          }}
          viewport={{ once: true }}
        >
          boldness in every detail,
        </Text>
        <Text
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
              delay: 2.8,
            },
          }}
          viewport={{ once: true }}
        >
          where every shade comple-
        </Text>
        <Text
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
              delay: 2.9,
            },
          }}
          viewport={{ once: true }}
        >
          ments your style
        </Text>
      </TextWrap>
    </Container>
  );
};

export default Hero;
