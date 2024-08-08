import React from 'react';
import { Container, Text, TextWrap } from './Hero.styled';
import GraySvg from './GraySvg';
import BlackTextSvg from './BlackTextSvg';
import PinkTextSvg from './PinkTextSvg';
import LinesSvg from './LinesSvg';

const Hero = () => {
  return (
    <Container>
      <GraySvg />
      <LinesSvg />
      <BlackTextSvg />
      <PinkTextSvg />

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
