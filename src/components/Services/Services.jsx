import React from 'react';
import {
  ServicesBlock,
  Item,
  List,
  SectionConteiner,
  ItemTitle,
  ItemText,
  ItemInfoBlock,
  ItemInfoTitle,
  ItemInfoText,
  ItemSubTitle,
} from './Services.styled';
import NetSvg from './NetSvg';
import Rec from './Rec';

const Services = () => {
  return (
    <SectionConteiner id="services">
      <ServicesBlock>
        <NetSvg />
        <List>
          <Item
            initial={{ opacity: 0, y: 200 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.5,
              },
            }}
            viewport={{ once: true }}
          >
            <ItemTitle>Project design</ItemTitle>
            <ItemText> It consists of planning, visualization, specifications and drawings.</ItemText>
            <ItemInfoBlock>
              <ItemInfoTitle>The specification</ItemInfoTitle>
              <ItemInfoText>
                Is all the content of the home: facing materials, lighting, plumbing, tiles, furniture, decor, etc. With the specification, you will
                know where to buy everything and who to contact.
              </ItemInfoText>
            </ItemInfoBlock>
            <ItemText>
              {' '}
              At the third stage of the work, the architect develops all the necessary drawings for the repair work. This is a detailed instruction so
              that the craftsmen can technically realize your home correctly.
            </ItemText>
            <ItemSubTitle>Terms: from 2.5 months</ItemSubTitle>
            <Rec />
          </Item>
          <Item
            initial={{ opacity: 0, y: 200 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.5,
              },
            }}
            viewport={{ once: true }}
          >
            <ItemTitle> Author's support</ItemTitle>
            <ItemText>
              {' '}
              We take care of all the stages of creating your dream home - from developing the layout to arranging the furniture after the renovation
              is complete
            </ItemText>
            <ItemInfoBlock>
              <ItemInfoTitle>At What is included?</ItemInfoTitle>
              <ul>
                <li> - Creation of a design project</li>
                <li> - Purchase of materials and logistics</li>
                <li> - Coordinating the work of the construction team</li>
                <li> - Visits for author's supervision and control of repair processes.</li>
              </ul>
            </ItemInfoBlock>
            <ItemText></ItemText>
            <ItemSubTitle>Terms: from 5 months</ItemSubTitle>
            <Rec />
          </Item>
          <Item
            initial={{ opacity: 0, y: 200 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.5,
              },
            }}
            viewport={{ once: true }}
          >
            <ItemTitle>Planning</ItemTitle>
            <ItemText>
              {' '}
              This is the foundation from which a nude design project begins and the correct work with the room in general. Without the right,
              ergonomic layout, you shouldn't start a design project or renovation.
            </ItemText>
            <ItemInfoBlock>
              <ItemInfoTitle>Our designer will offer you several options for planning your space </ItemInfoTitle>
              <ItemInfoText>
                You can choose one of them or we will combine several options to find the one that suits you in all respects.
              </ItemInfoText>
            </ItemInfoBlock>
            <ItemText></ItemText>
            <ItemSubTitle>Terms: 2-3 weeks</ItemSubTitle>
            <Rec />
          </Item>
          <Item
            initial={{ opacity: 0, y: 200 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.5,
              },
            }}
            viewport={{ once: true }}
          >
            <ItemTitle>Technical project </ItemTitle>
            <ItemText>
              {' '}
              This is a set of drawings that contains everything from a calendar schedule of work to a dismantling plan, installation of partitions,
              lighting and furnishing plans, plumbing plans, outlets, floor, ceiling, door opening plan, and a large list of contractors.
            </ItemText>
            <ItemInfoBlock>
              <ItemInfoTitle>The technical project differs </ItemInfoTitle>
              <ItemInfoText>From the design project in the very completeness of the drawings. </ItemInfoText>
            </ItemInfoBlock>
            <ItemText>
              {' '}
              That is, while in a design project you will have the exact article, quantity, and texture chosen by the designer on the flooring plan,
              in a technical project you will only know that you will have laminate flooring in your living room.
            </ItemText>
            <ItemSubTitle>Terms: 1 month</ItemSubTitle>
            <Rec />
          </Item>
        </List>
      </ServicesBlock>
    </SectionConteiner>
  );
};

export default Services;
