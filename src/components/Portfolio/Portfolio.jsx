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
  BlurText,
  TextContent,
  TextWrapper,
  Button,
  PhotoWrapper,
} from './Portfolio.styled';

const items = [
  {
    image: 'portfolio/badroom_ds.jpg',
    title: 'badroom',
  },
  {
    image: 'portfolio/childrens_ds.jpg',
    title: "children's",
  },
  {
    image: 'portfolio/kitchen_ds.jpg',
    title: 'kitchen',
  },
];
const Block = ({ items }) => {
  return (
    <BlockList>
      {items.map(item => (
        <>
          <Li key={item.title}>
            <PhotoWrapper>
              <Photo img={item.image} />
            </PhotoWrapper>
            <TextBlock>{item.title}</TextBlock>
          </Li>
        </>
      ))}
    </BlockList>
  );
};
const Portfolio = () => {
  return (
    <SectionConteiner id="portfolio">
      <AncorLink>Portfolio</AncorLink>
      <Block items={items} />
      <TextWrapper>
        <TextContent>
          <Text>
            Get a<ColoredText> personalized</ColoredText>
          </Text>
          <Text>calculation of</Text>
          <Text>
            the cost of <BlurText>your</BlurText>
          </Text>
          <Text>project</Text>
        </TextContent>
      </TextWrapper>
      <Button>+ sample project design and implementation photos in the messenger</Button>
    </SectionConteiner>
  );
};

export default Portfolio;
