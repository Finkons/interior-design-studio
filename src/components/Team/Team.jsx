import React from 'react';
import { useState } from 'react';
import {
  Container,
  ImgWrap,
  TeamImg,
  TitleContainer,
  InfoWrap,
  Name,
  Position,
  Description,
  SocialWrap,
  MobileWrap,
  TreeImgWrap,
  TreeImg,
  EmployeeImgWrap,
  EmployeeImg,
  StyledButton,
  ButtonWrap,
} from './Team.styled';
import { team } from './teamdata';

const variants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 5 },
  },
};

const imageVariants = {
  offscreen: {
    x: 100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'linear',
      duration: 1,
    },
  },
};

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:1337/api/home?locale=en');
//   const data = await res.json();
//   console.log(data);
//   return { props: { data } };
// }

const Team = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonId, setButtonId] = useState(0);
  const [isActive, setIsActive] = useState(0);
  console.log(data);
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

      <ImgWrap>
        <TeamImg src="team/team.png" alt="Linkedln icon" />
      </ImgWrap>

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
        <TreeImgWrap>
          <TreeImg src="team/tree.png" alt="tree" />
        </TreeImgWrap>

        <EmployeeImgWrap>
          <EmployeeImg
            src={team[buttonId].photo}
            alt={team[buttonId].name}
            key={buttonId}
            variants={imageVariants}
            initial="offscreen"
            animate="onscreen"
          />
        </EmployeeImgWrap>
        <ButtonWrap>
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
        </ButtonWrap>
      </MobileWrap>
    </Container>
  );
};

export default Team;
