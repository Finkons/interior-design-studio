import React from 'react';
import {
  SectionConteiner,
  AncorLink,
  BlockList,
  Li,
  Photo,
  TextBlock,
  Text,
  ColoredText,
  GreyText,
  TextContent,
  TextWrapper,
  Button,
  PhotoWrapper,
  Content,
  BlurContent,
  MainBtn,
  PositionBottom,
  BtnBlock,
  PositionTop240, LiRevers,
  PositionTop0,
  PositionRight0, BtnBlockRevers
} from './Portfolio.styled';

const Portfolio = () => {
  return (
    <SectionConteiner id="portfolio">
      <AncorLink>Portfolio</AncorLink>
      <BlockList>
          <Li>
            <PhotoWrapper type='1' >
              <Photo />
            </PhotoWrapper>
            <TextBlock>badroom</TextBlock>
            <PositionTop240>
              <PhotoWrapper type='2' size='2'>
              <Photo  />
            </PhotoWrapper>
            </PositionTop240>
            <PositionBottom>
            <PhotoWrapper type='3' size='3'>
              <Photo  />
            </PhotoWrapper>
            </PositionBottom>
           <BtnBlock>
            <Content>A me`s bedroom in the <ColoredText>neoclassical style</ColoredText> with elements of a stone wall creates an atmosphere of <BlurContent>masculinity and elegance.</BlurContent> Soft colors, a sophisticated furniture ensemble and the addition of stone details create a cozy <ColoredText>place for relaxation.</ColoredText></Content>
            <MainBtn type="button">Learn more</MainBtn>
            </BtnBlock>
          </Li>
          <LiRevers>
            <PhotoWrapper type='4'>
              <Photo />
            </PhotoWrapper>
            <TextBlock>children's</TextBlock>
            <PositionRight0>
            <PhotoWrapper type='6' size='4'>
              <Photo />
            </PhotoWrapper>
            </PositionRight0>
            <PositionTop0>
            <PhotoWrapper type='5' size='2'>
              <Photo  />
            </PhotoWrapper>
            </PositionTop0>
            <BtnBlockRevers>
            <Content>The design of a children's room in the <ColoredText>style of romanticism</ColoredText> is a passion for <BlurContent>dreams and tenderness,</BlurContent> where every detail speaks of grace and peace. The color range in coffee-beige tones creates an atmosphere of <ColoredText>warmth and coziness,</ColoredText> complementing the stylish elements of the interior.</Content>
            <MainBtn type="button">Learn more</MainBtn>
            </BtnBlockRevers>
          </LiRevers>
          <Li>
            <PhotoWrapper type='7'>
              <Photo  />
            </PhotoWrapper>
            <TextBlock>kitchen</TextBlock>
            <PositionTop240>
            <PhotoWrapper size='1'>
              <Photo  />
            </PhotoWrapper>
            </PositionTop240>
            <PositionBottom>
            <PhotoWrapper type='8' size='2'>
              <Photo  />
            </PhotoWrapper>
            </PositionBottom>
            <BtnBlock>
            <Content>Ukrainian cuisine: <ColoredText>traditional embroideries,</ColoredText> wooden furniture with carvings, ceramic tiles with <BlurContent>Ukrainian ornaments.</BlurContent> A stove or fireplace creates warmth and atmosphere. <ColoredText>Open shelves for dishes.</ColoredText> Decorative textile products emphasize the Ukrainian theme, creating <BlurContent>coziness and traditionality.</BlurContent></Content>
            <MainBtn type="button">Learn more</MainBtn>
            </BtnBlock>
          </Li>
    </BlockList>
      <TextWrapper>
        <TextContent>
          <Text>
            Get a<ColoredText> personalized</ColoredText>
          </Text>
          <Text>calculation of</Text>
          <Text>
            <b>the cost of <GreyText>your</GreyText></b>
          </Text>
          <Text>project</Text>
        </TextContent>
      </TextWrapper>
      <Button>+ sample project design and implementation photos in the messenger</Button>
    </SectionConteiner>
  );
};

export default Portfolio;
