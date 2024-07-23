import styled from 'styled-components';
import mediaBp from '../../../styles/breakpoints';
import { motion } from 'framer-motion';


export const ColoredText = styled.span`
  color: #e50185;
`;
export const Content = styled(motion.p)`
  color: #292929;
  text-align: justify;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
  width: 230px;
  text-indent: 62px;
  margin-bottom: 20px;
  ${mediaBp('tablet')} {
   margin-bottom: 50px;
  }
  ${mediaBp('desktop')} {
    text-indent: 45px;
    font-size: 18px;
    width: 376px;
    margin-bottom: 60px;
  }
`;
export const BlurContent = styled.span`
  color: rgba(41, 41, 41, 0.5);
`;
export const MainBtn = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  color: #e50185;
  font-family: 'PhontPhreaksHandwriting';
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 40px */
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: transparent;
  ${mediaBp('tablet')} {
   font-size: 38px;
  }
  ${mediaBp('desktop')} {
    font-size: 64px;
    letter-spacing: 3.2px;
    }
`;

export const BtnBlock = styled.div`
padding-left: calc(0px + 400 * ((100vw - 320px) / (1920 - 320)));
padding-top: calc(25px + (100 - 25) * ((100vw - 320px) / (1920 - 320)));
`;
export const Wrapper = styled.div`
`;

export const ContentWrapper = styled.div`
padding-bottom: calc(380px + (500 - 380) * ((100vw - 320px) / (768 - 320)));
  ${mediaBp('tablet')} {
   padding-bottom: 160px;
  }
  ${mediaBp('desktop')} {
  padding-bottom: 160px;
    }`;

    export const BtnText = styled(motion.p)`
   margin-bottom: -15px;`

