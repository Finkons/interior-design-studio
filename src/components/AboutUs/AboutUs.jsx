import React from 'react';
import {
  Wrapper,
  CenterBlock,
  SectionConteiner,
  Li,
  GrayTitle,
  AncorLink,
  ImageBox,
  Text,
  ColoredText,
  BlurText,
  TextBlock,
  NumberBlock,
  NumberTitle,
  Title,
  FlexList,
  Content,
  BlurContent,
  MainBtn,
  TitleCenter,
  Plus,
  TextIndent,
} from './AboutUs.styled';
const AboutUs = () => {
  return (
    <SectionConteiner id="about">
      <Wrapper>
        <AncorLink>About Us</AncorLink>
        <TextBlock>
          <Text>
            Our <ColoredText>interior design studio</ColoredText>
          </Text>
          <Text>offers a range of benefits that</Text>
          <TextIndent>
            <BlurText>will enhance your</BlurText> living or working space
          </TextIndent>
        </TextBlock>
        <ImageBox />
      </Wrapper>
      <Content>
        With our <ColoredText>expertise</ColoredText> and <ColoredText>attention</ColoredText> to detail, we can create a space that is both{' '}
        <BlurContent>functional</BlurContent> and <BlurContent>visually stunning</BlurContent>
      </Content>
      <Content>
        Whether you're looking to <BlurContent>revamp your home</BlurContent> or <BlurContent>office</BlurContent>, our team of talented designers
        will work closely with you<ColoredText>to bring your vision to life</ColoredText>
      </Content>

      <NumberBlock>
        <div>
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
        </div>
        <MainBtn type="button">Contact Us</MainBtn>
      </NumberBlock>
    </SectionConteiner>
  );
};

export default AboutUs;
