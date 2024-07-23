import React from 'react';
import { ServicesBlock, Item, List, SectionConteiner } from './Services.styled';
import NetSvg from './NetSvg';

const Services = () => {
  return (
    <SectionConteiner id="services">
      <ServicesBlock>
        <NetSvg />
        <List>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </List>
      </ServicesBlock>
    </SectionConteiner>
  );
};

export default Services;
