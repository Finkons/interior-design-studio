import styled from 'styled-components';
import mediaBp from '../../styles/breakpoints';
import { motion } from 'framer-motion';

const setTopDesktop = props => {
  switch (props.id) {
    case 'Sara Thompson':
      return '18%';
    case 'John Doe':
      return '78%';
    case 'Anna Ohara':
      return '16%';
    case 'Michael Johnson':
      return '82%';
    case 'Sofia Shtafan':
      return '20%';
    case 'Jane Smith':
      return '76%';
    default:
      return '';
  }
};

const setTopTablet = props => {
  switch (props.id) {
    case 'Sara Thompson':
      return '18%';
    case 'John Doe':
      return '80%';
    case 'Anna Ohara':
      return '16%';
    case 'Michael Johnson':
      return '84%';
    case 'Sofia Shtafan':
      return '20%';
    case 'Jane Smith':
      return '78%';
    default:
      return '';
  }
};

const setLeftDesktop = props => {
  switch (props.id) {
    case 'Sara Thompson':
      return '5%';
    case 'John Doe':
      return '25%';
    case 'Anna Ohara':
      return '35%';
    case 'Michael Johnson':
      return '48%';
    case 'Sofia Shtafan':
      return '72%';
    case 'Jane Smith':
      return '83%';
    default:
      return '';
  }
};

const setLeftTablet = props => {
  switch (props.id) {
    case 'Sara Thompson':
      return '5%';
    case 'John Doe':
      return '25%';
    case 'Anna Ohara':
      return '35%';
    case 'Michael Johnson':
      return '48%';
    case 'Sofia Shtafan':
      return '72%';
    case 'Jane Smith':
      return '83%';
    default:
      return '';
  }
};

export const Container = styled.section`
  overflow: hidden;
  width: 100%;
  height: 850px;
  padding: 0px 0px 0px 0px;
  position: relative;
  ${mediaBp('tablet')} {
    padding: 180px 0px 0px 0px;
    height: 900px;
  }
  ${mediaBp('desktop')} {
    padding: 229px 0px 0px 0px;
    height: 1290px;
  }
`;

export const ImgWrap = styled.div`
  width: 0px;
  height: 0px;

  ${mediaBp('tablet')} {
    width: 87.5vw;
    height: auto;
    margin-left: auto;
    margin-right: 0;
  }
  ${mediaBp('desktop')} {
    width: 87.5vw;
    height: auto;
    margin-left: auto;
    margin-right: 0;
  }
`;

export const TeamImg = styled.img`
  width: 0px;
  height: 0px;
  ${mediaBp('tablet')} {
    width: 100%;
    height: auto;
  }
  ${mediaBp('desktop')} {
    width: 100%;
    height: auto;
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  display: none;
  ${mediaBp('tablet')} {
    display: block;
    top: ${setTopTablet};
    left: ${setLeftTablet};
  }
  ${mediaBp('desktop')} {
    display: block;
    top: ${setTopDesktop};
    left: ${setLeftDesktop};
  }
`;
export const InfoWrap = styled(motion.div)``;

export const Name = styled(motion.button)`
  border: none;
  width: 170px;
  margin-bottom: 6px;

  color: #e50185;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: 82%; /* 52.48px */
  letter-spacing: -3.2px;
  text-transform: uppercase;
  text-align: left;
  ${mediaBp('tablet')} {
    width: 250px;
    margin-bottom: 8px;
    font-size: 40px;
  }
  ${mediaBp('desktop')} {
    width: 320px;
    margin-bottom: 8px;
    font-size: 64px;
  }
`;

export const Position = styled.p`
  margin-bottom: 10px;
  color: #b2b2b2;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 18px */
  text-transform: uppercase;
  ${mediaBp('tablet')} {
    margin-bottom: 17px;
    font-size: 14px;
  }
  ${mediaBp('desktop')} {
    margin-bottom: 17px;
    font-size: 14px;
  }
`;

export const Description = styled.p`
  width: 130px;
  margin-bottom: 15px;
  color: #292929;
  text-align: left;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
  ${mediaBp('tablet')} {
    width: 185px;
    margin-bottom: 17px;
    font-size: 16px;
  }
  ${mediaBp('desktop')} {
    width: 200px;
    margin-bottom: 17px;
    font-size: 18px;
  }
`;

export const SocialWrap = styled.div`
  width: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 13px;
  ${mediaBp('tablet')} {
    width: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 8px;
  }
  ${mediaBp('desktop')} {
    width: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 8px;
  }
`;

export const MobileWrap = styled.div`
  position: relative;
  display: block;
  padding: 20px 0px;
  ${mediaBp('tablet')} {
    display: none;
  }
  ${mediaBp('desktop')} {
    display: none;
  }
`;

export const TreeImgWrap = styled.div`
  width: 480px;
  height: 555px;
  // overflow: hidden;
  position: absolute;
  top: 60%;
  right: 5%;
  z-index: 20;
  margin-left: auto;
  margin-right: 0;
`;

export const TreeImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const EmployeeImgWrap = styled(motion.div)`
  position: absolute;
  top: 60%;
  left: 15%;
  z-index: 25;
  height: 531px;
`;

export const EmployeeImg = styled(motion.img)``;

export const ButtonWrap = styled.div`
  position: absolute;
  top: 305%;
  left: 50%;
  z-index: 40;
`;
export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
