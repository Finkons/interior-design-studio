import React from 'react';
import { useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { CenterBlock, Li, NumberBlock, NumberTitle, Title, FlexList, TitleCenter, Plus, NumberContainer } from './AboutUs.styled';

const NumberItem = ({ number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (number > 49) {
      const animation = animate(count, number, { duration: 3 });
      return animation.stop;
    }
    const animation = animate(count, number, { duration: 0.2 * number });
    return animation.stop;
  }, []);
  return <NumberTitle>{rounded}</NumberTitle>;
};

const NumberSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <NumberBlock ref={ref}>
      {isInView ? (
        <NumberContainer>
          <CenterBlock>
            <NumberItem number={250}></NumberItem>
            <Plus>+</Plus>

            <TitleCenter>Projects</TitleCenter>
          </CenterBlock>
          <FlexList>
            <Li>
              <NumberItem number={10}></NumberItem>
              <Title>Years of work</Title>
            </Li>
            <Li>
              <NumberItem number={50}></NumberItem>
              <Plus>+</Plus>
              <Title>Contractors</Title>
            </Li>
            <Li>
              <NumberItem number={11}></NumberItem>
              <Title>Employees</Title>
            </Li>
          </FlexList>
        </NumberContainer>
      ) : null}
    </NumberBlock>
  );
};
export default NumberSection;
