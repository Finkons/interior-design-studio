import React from 'react';
import { useState } from 'react';
import {
  Container,
  Wrap,
  TitleContainer,
  InfoWrap,
  Name,
  Position,
  Description,
  SocialWrap,
  MobileWrap,
  TreeImg,
  LineImg,
  StyledButton,
} from './Team.styled';
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
  const [buttonId, setButtonId] = useState(0);
  const [isActive, setIsActive] = useState(false);

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
                  duration: 0.5,
                },
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {employee.name}
            </Name>
            {isHovered === true && (
              <InfoWrap
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
              >
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
        <Name>{team[buttonId].name}</Name>
        <InfoWrap>
          <Position>{team[buttonId].position}</Position>
          <Description>{team[buttonId].description}</Description>
          <SocialWrap>
            <img src="team/LinkedIn.svg" alt="Linkedln icon" />
            <img src="team/behance.svg" alt="Linkedln icon" />
            <img src="team/Dribble.svg" alt="Linkedln icon" />
            <img src="team/X.svg" alt="Linkedln icon" />
          </SocialWrap>
        </InfoWrap>
        <TreeImg src="team/tree.png" alt="tree" />
        <LineImg src="team/floor.png" alt="floor" />
        <img src={team[buttonId].photo} alt={team[buttonId].name} />
        <div>
          {[...Array(6)].map((_, index) => (
            <StyledButton
              type="button"
              key={index}
              onClick={() => {
                setButtonId(index);
                setIsActive(index);
              }}
            >
              {isActive === index ? <img src="team/active.svg" alt="button" /> : <img src="team/button.svg" alt="button" />}
            </StyledButton>
          ))}
        </div>
      </MobileWrap>
    </Container>
  );
};

export default Team;
