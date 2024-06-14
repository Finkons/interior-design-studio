import React from "react";
import {
  Container,
  TextBlack,
  TextPink,
  Text,
  StyledOval,
  StyledLine,
} from "./Hero.styled";

const Hero = () => {
  return (
    <Container>
      <TextBlack>are just the </TextBlack>
      <TextPink>start</TextPink>
      <StyledOval src="/hero/oval.svg" alt="oval" height="373" width="685" />
      <StyledLine src="/hero/lines1.svg" alt="line" height="189" width="563" />
      <div>
        <Text>
          Where every corner is a canvas for your story. Stripped - back design
          is boldness in every detail, where every shade comple- ments your
          style
        </Text>
      </div>
    </Container>
  );
};

export default Hero;
