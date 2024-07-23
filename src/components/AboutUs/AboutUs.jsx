import React from 'react';
import {
  CenterBlock,
  SectionConteiner,
  Li,
  GrayTitle,
  AncorLink,
  Text,
  ColoredText,
  BlurText,
  TextBlock,
  NumberBlock,
  NumberTitle,
  Title,
  FlexList,
  TitleCenter,
  Plus,
  TextIndent,
  Space, NumberContainer
} from './AboutUs.styled';
import SvgBlock from './SvgBlock';
import BtnContentBlock from './BtnContentBlock/Btn ContentBlock';
const AboutUs = () => {
  return (
    <SectionConteiner id="about">
        <AncorLink>About Us</AncorLink>
        <TextBlock>
          <Text>
           <Space>Our <ColoredText>interior</ColoredText></Space> <Space><ColoredText>design studio</ColoredText></Space>
          </Text>
          <Text>offers a range of <Space>benefits that</Space></Text>
          <TextIndent>
            <BlurText>will enhance your</BlurText> living or working space
          </TextIndent>
        </TextBlock>
        <BtnContentBlock/> 
        <SvgBlock />
       <NumberBlock>
        <NumberContainer>
          <CenterBlock>
            <NumberTitle>
              250<Plus>+</Plus>
            </NumberTitle>
            <TitleCenter>Projects</TitleCenter>
          </CenterBlock>
          <FlexList>
            <Li>
              <GrayTitle>10</GrayTitle>
              <Title>Years of work</Title>
            </Li>
            <Li>
              <GrayTitle>
                50<Plus>+</Plus>
              </GrayTitle>
              <Title>Contractors</Title>
            </Li>
            <Li>
              <GrayTitle>1&#32;1</GrayTitle>
              <Title>Employees</Title>
            </Li>
          </FlexList>
        </NumberContainer>
      </NumberBlock>
    </SectionConteiner>
  );
};

export default AboutUs;
