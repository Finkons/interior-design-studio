import styled from 'styled-components';
import { motion } from 'framer-motion';
import mediaBp from '../../styles/breakpoints';

// 1920 = 100vw
// 1920 - 400 = 1520 = 79vw
// 1366 = 71vw
// 1080 = 56vw
// 1024 = 53vw
//680 = 35vw
// 768 = 40vw
// 478 = 25vw
// 564 = 29vw
// 320 = 16vw
// 375 = 19vw
// 456-340 = 23vw
//190 = 10vw
//200 = 10vw
//20 = 1vw
//18 = 0.9vw
// 16 = 0.8vw
// 14 = 0.7vw
// 12 = 0.6vw
// 10 = 0.5vw
// 8 = 0.4vw
//36 = 1.8vw
// 46 = 2.3vw
// 56 = 2.8vw

export const SectionConteiner = styled.section`
  position: relative;
  overflow: hidden;
`;

export const ServicesBlock = styled(motion.div)`
  margin: 0 auto;
  position: relative;
  ${mediaBp('tablet')} {
    height: 100vw;
    width: 100vw;
  }
  ${mediaBp('desktop')} {
    height: 120vw;
    width: 100vw;
    margin-bottom: -10vw;
  }
`;

export const StyledNetSvg = styled(motion.svg)`
  position: absolute;
  height: 500vw;
  z-index: -2;

  ${mediaBp('tablet')} {
    display: block;
    height: 100vw;
    width: 100%;
  }
  ${mediaBp('desktop')} {
    display: block;
    height: 120vw;
    width: 100%;
  }
`;

export const StyledRec = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: 69vw;
  height: 80vw;
  fill: #f0f0f0;

  flex-shrink: 0;
  ${mediaBp('tablet')} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 32vw;
    height: 37vw;
  }
  ${mediaBp('desktop')} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 36vw;
    height: 40vw;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 9vw;
  padding-top: 10vw;

  ${mediaBp('tablet')} {
    gap: 7vw;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-top: 10vw;
  }
  ${mediaBp('desktop')} {
    gap: 7vw;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-top: 10vw;
    //повернуть на 60 градусов
    transform: rotate(15deg);
  }
`;

export const Item = styled(motion.li)`
  list-style: none;
  position: relative;
  width: 69vw;
  height: 80vw;
  border: 1px solid gray;
  border-radius: 30px;
  padding: 3vw;
  svg {
    fill: #f0f0f0;
    transition: all 0.1s ease-in-out;
  }

  flex-shrink: 0;
  ${mediaBp('tablet')} {
    width: 29vw;
    height: 35vw;
  }
  ${mediaBp('desktop')} {
    width: 27vw;
    height: 33vw;
    rotate: -15deg;
  }

  cursor: pointer;
  &:hover {
    svg {
      fill: #fff;
      transition: all 0.1s ease-in-out;
    }
    h2 {
      color: #e50185;
      transition: all 0.3s ease-in-out;
    }
    h3 {
      color: #e50185;
      transition: all 0.3s ease-in-out;
    }
    h4 {
      color: #e50185;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const ItemTitle = styled.h2`
  color: #b2b2b2;

  font-family: Poppins;
  font-size: 8vw;
  font-style: normal;
  font-weight: 900;
  line-height: 100%; /* 60px */
  letter-spacing: -3px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  ${mediaBp('tablet')} {
    font-size: 4vw;
  }
  ${mediaBp('desktop')} {
    font-size: 4vw;
  }
`;

export const ItemText = styled.p`
  color: #292929;
  width: 54vw;
  flex-shrink: 0;
  text-indent: 30px;
  padding-top: 20px;

  font-family: Poppins;
  font-size: 2vw;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  ${mediaBp('tablet')} {
    width: 27vw;

    font-size: 1vw;
  }
  ${mediaBp('desktop')} {
    width: 27vw;

    font-size: 1vw;
  }
`;

export const ItemInfoBlock = styled.div`
  width: 56vw;
  flex-shrink: 0;
  padding-top: 20px;
  padding-left: 30px;
  ${mediaBp('tablet')} {
    width: 27vw;
  }
  ${mediaBp('desktop')} {
    width: 25vw;
  }
  > ul {
    list-style: decimal;
    > li {
      color: #292929;
      font-family: Poppins;
      font-size: 1vw;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      padding-top: 10px;
      ${mediaBp('tablet')} {
        font-size: 1vw;
      }
      ${mediaBp('desktop')} {
        font-size: 1vw;
      }
    }
  }
`;

export const ItemInfoTitle = styled.h3`
  color: #b2b2b2;

  font-family: Poppins;
  font-size: 3vw;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 31.2px */
  transition: all 0.3s ease-in-out;
  ${mediaBp('tablet')} {
    font-size: 1.5vw;
  }
  ${mediaBp('desktop')} {
    font-size: 1.5vw;
  }
`;

export const ItemInfoText = styled.p`
  color: #292929;
  font-family: Poppins;
  font-size: 2vw;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  padding-top: 20px;
  ${mediaBp('tablet')} {
    font-size: 1vw;
  }
  ${mediaBp('desktop')} {
    font-size: 1vw;
  }
`;

export const ItemSubTitle = styled.h4`
  position: absolute;
  bottom: 1.5vw;

  font-family: 'PhontPhreaksHandwriting';
  font-size: 5vw;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 40px */
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  ${mediaBp('tablet')} {
    font-size: 2.5vw;
  }
  ${mediaBp('desktop')} {
    font-size: 2.5vw;
  }
`;
