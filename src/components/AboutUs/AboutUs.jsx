import React from "react";
import {
  Wrapper, CenterBlock, SectionConteiner, Li, GrayTitle, AncorLink, ImageBox, Text, ColoredText, BlurText,TextBlock, NumberBlock, NumberTitle, Title, FlexList
} from "./AboutUs.styled";
const AboutUs = () => {
  return (
  <SectionConteiner id='about'>
    <Wrapper >
      <AncorLink >About Us</AncorLink>
      <TextBlock>  
        <Text>Our <ColoredText>interior design studio</ColoredText></Text>
        <Text>offers a range of benefits that</Text>
        <Text><BlurText>will enhance  your</BlurText>  living or</Text>
        <Text>working space</Text>
      </TextBlock>
      <ImageBox/>
    </Wrapper>
    <NumberBlock>
      <CenterBlock>
        <NumberTitle>250+</NumberTitle>
        <Title>Projects</Title>
      </CenterBlock>
      <FlexList>
      <Li><GrayTitle>10</GrayTitle><Title>Years of work</Title></Li>
      <Li><GrayTitle>50+</GrayTitle><Title>Contractors</Title></Li>
      <Li><GrayTitle>11</GrayTitle><Title>Employees</Title></Li>
      </FlexList>
    </NumberBlock>
  

    </SectionConteiner>);
};

export default AboutUs;
