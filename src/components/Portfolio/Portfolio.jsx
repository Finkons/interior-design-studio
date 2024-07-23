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
  PositionBottom,
  PositionTop240, LiRevers,
  PositionTop0,
  PositionRight0, BtnBlockRevers, RelativBox
} from './Portfolio.styled';
import ContentBtnBlock from './SvgHoverLine'
import SvgStartLine from './SvgStartLine';


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
            <ContentBtnBlock num={0}/>
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
            <ContentBtnBlock num={1}/>
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
            <ContentBtnBlock num={2}/>
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
      <RelativBox>
      <SvgStartLine/>
      </RelativBox>
    </SectionConteiner>
  );
};

export default Portfolio;
