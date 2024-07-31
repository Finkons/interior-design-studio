import React from 'react';
import { SectionConteiner, AncorLink, Text, ColoredText, GreyText, TextContent, TextWrapper, Button, RelativBox } from './Portfolio.styled';
import SvgStartLine from './SvgStartLine';
import PhotoItems from './PhotoItems';

const Portfolio = () => {
  return (
    <SectionConteiner id="portfolio">
      <AncorLink>Portfolio</AncorLink>
      <PhotoItems />
      <TextWrapper>
        <TextContent>
          <Text>
            <i>Get a</i>
            <i>
              <ColoredText>personalized</ColoredText>
            </i>
          </Text>
          <Text>
            <i>calculation of</i>
          </Text>
          <Text>
            <b>
              the cost of <GreyText>your</GreyText>
            </b>
          </Text>
          <Text>project</Text>
        </TextContent>
      </TextWrapper>
      <Button>+ sample project design and implementation photos in the messenger</Button>
      <RelativBox>
        <SvgStartLine />
      </RelativBox>
    </SectionConteiner>
  );
};

export default Portfolio;
