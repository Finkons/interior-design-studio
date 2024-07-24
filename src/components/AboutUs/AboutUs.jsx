import React from 'react';
import NumberSection from './NumberSection';

import {
  SectionConteiner,
  AncorLink,
  Text,
  ColoredText,
  BlurText,
  TextBlock,
  TextIndent,
  Space
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
      <NumberSection/>
    </SectionConteiner>
  );
};

export default AboutUs;
