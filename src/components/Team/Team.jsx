import React from 'react';
import { useState } from 'react';
import { Container, Wrap, TitleContainer, InfoWrap, Name, Position, Description, SocialWrap, MobileWrap } from './Team.styled';
import { team } from './teamdata';

const variants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 5 },
  },
};

const Team = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Container id="team">
      {team.map((employee, index) => {
        return (
          <TitleContainer key={index} id={employee.name}>
            <Name
              type="button"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  delay: 2,
                },
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {employee.name}
            </Name>
            {isHovered === true && (
              <InfoWrap>
                <Position>{employee.position}</Position>
                <Description>{employee.description}</Description>
                <SocialWrap>
                  <img src="team/LinkedIn.svg" alt="Linkedln icon" />
                  <img src="team/behance.svg" alt="Linkedln icon" />
                  <img src="team/Dribble.svg" alt="Linkedln icon" />
                  <img src="team/X.svg" alt="Linkedln icon" />
                </SocialWrap>
              </InfoWrap>
            )}
          </TitleContainer>
        );
      })}

      <Wrap></Wrap>
      <MobileWrap>
        <img src="team/sara.png" alt="sara" />
      </MobileWrap>
    </Container>
  );
};

export default Team;
