import styled from 'styled-components';
import mediaBp from '../../styles/breakpoints';
import { setBGImage } from '../../helpers/setBGImage';
import { setSizeImage, setPositionTop, setPositionLeft, setPadding, setPaddingBottom } from '../../helpers/setSizeImage';
import { motion } from 'framer-motion';
export const SectionConteiner = styled.section`
  margin: 0 auto;
  padding: 0 0 30px 0;
  overflow: hidden;
  ${mediaBp('tablet')} {
    padding: 0 0 20px 0;
  }
  ${mediaBp('desktop')} {
    padding: 235px 0 40px 0;
  }
`;
export const AncorLink = styled.div`
  color: #b4b4b4;
  text-align: justify;
  font-family: Roboto;
  font-size: 8px;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  padding: 10px 10px;
  text-align: right;
  ${mediaBp('tablet')} {
    font-size: 12px;
  }
  ${mediaBp('desktop')} {
    font-size: 16px;
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  ${mediaBp('tablet')} {
    flex-direction: row;
    margin-bottom: 100px;
    display: flex;
  }
  ${mediaBp('desktop')} {
    max-width: 1920px;
    flex-direction: row;
    display: flex;
    margin-bottom: 200px;
  }
`;
export const LiRevers = styled.li`
  margin-bottom: 100px;
  ${mediaBp('tablet')} {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 100px;
  }
  ${mediaBp('desktop')} {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 200px;
  }
`;
export const SquareBox = styled.div`
  overflow: hidden;
  position: relative;
  margin-top: ${setPositionTop}%;
  left: ${setPositionLeft}%;
  width: ${setSizeImage};
  background-image: ${setBGImage};
  background-size: contain;
  background-repeat: no-repeat;
  &:before {
    content: '';
    display: block;
    padding-top: ${setPadding}%;
    padding-bottom: ${setPaddingBottom}%;
  }
  ${mediaBp('tablet')} {
    width: ${setSizeImage};
    margin-top: ${setPositionTop}%;
    left: ${setPositionLeft}%;
  }
  ${mediaBp('desktop')} {
    width: ${setSizeImage};
    margin-top: ${setPositionTop}%;
    left: ${setPositionLeft}%;
  }
`;

export const Filter = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: grayscale(80%);
  transition: backdrop-filter 0.4s ease-in-out;
  &:hover {
    backdrop-filter: grayscale(0%);
    // for Safari always use -webkit- prefix
    --webkit-backdrop-filter: grayscale(0%);
  }
  &:before {
    content: '';
    display: block;
    padding-top: 100%; /* initial ratio of 1:1*/
  }
`;
export const ContentContainer = styled.div`
  overflow: hidden;
  position: relative;
  padding-bottom: 20px;
  width: 100%;

  ${mediaBp('tablet')} {
    padding-bottom: 0;
    width: 50%;
  }
  ${mediaBp('desktop')} {
    padding-bottom: 0;
    width: 50%;
  }
`;
export const TextBlock = styled.p`
  font-family: Poppins;
  position: absolute;
  top: 0%;
  left: 0%;
  bottom: 0;
  right: 0;
  font-size: calc(130px + (310 - 130) * ((100vw - 320px) / (770 - 320)));
  line-height: calc(104px + (250 - 104) * ((100vw - 320px) / (770 - 320)));
  font-weight: 900;
  text-transform: uppercase;
  opacity: 0.3;
  background: var(--2-Shadov, linear-gradient(270deg, #292929 2.75%, rgba(143, 143, 143, 0) 174.73%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  mix-blend-mode: color-burn;
  filter: blur(2.5px);
  word-break: break-word;
  ${mediaBp('tablet')} {
    top: 1%;
    left: -4%;
    line-height: calc(94px + (320 - 94) * ((100vw - 600px) / (1920 - 600)));
    font-size: calc(136px + (400 - 136) * ((100vw - 600px) / (1920 - 600)));
  }
  ${mediaBp('desktop')} {
    top: -2%;
    left: -4%;
    line-height: calc(104px + (320 - 104) * ((100vw - 600px) / (1920 - 600)));
    font-size: calc(150px + (410 - 150) * ((100vw - 600px) / (1920 - 600)));
  }
`;
export const TextBlockRevers = styled.p`
  font-family: Poppins;
  position: absolute;
  top: 0%;
  left: 0%;
  bottom: 0;
  right: 0;
  font-size: calc(130px + (310 - 130) * ((100vw - 320px) / (770 - 320)));
  line-height: calc(104px + (250 - 104) * ((100vw - 320px) / (770 - 320)));
  font-weight: 900;
  text-transform: uppercase;
  opacity: 0.3;
  background: var(--2-Shadov, linear-gradient(270deg, #292929 2.75%, rgba(143, 143, 143, 0) 174.73%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  mix-blend-mode: color-burn;
  filter: blur(2.5px);
  word-break: break-word;
  ${mediaBp('tablet')} {
    text-align: end;
    top: 1%;
    left: -4%;
    line-height: calc(94px + (320 - 94) * ((100vw - 600px) / (1920 - 600)));
    font-size: calc(136px + (400 - 136) * ((100vw - 600px) / (1920 - 600)));
  }
  ${mediaBp('desktop')} {
    text-align: end;
    top: -2%;
    left: -4%;
    line-height: calc(104px + (320 - 104) * ((100vw - 600px) / (1920 - 600)));
    font-size: calc(150px + (410 - 150) * ((100vw - 600px) / (1920 - 600)));
  }
`;

export const TextContent = styled.div`
  font-family: Poppins;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    text-align: left;
  }
`;

export const Text = styled.p`
  padding-left: 4px;
  font-family: Poppins;
  letter-spacing: -0.06em;
  line-height: 100%;
  font-weight: 900;
  color: #808080;
  font-size: 32px;
  text-transform: uppercase;
  & > b {
    font-weight: 900;
    display: inline-block;
  }
  & > i {
    font-style: normal;
    text-indent: 50px;
    display: inline-block;
  }
  ${mediaBp('tablet')} {
    font-size: 100px;
    letter-spacing: 20%;
    font-size: calc(60px + (100 - 60) * ((100vw - 600px) / (1920 - 600)));
    & > b {
      font-weight: 900;
      display: inline-block;
      text-indent: 100px;
    }
    & > i {
      font-style: normal;
      display: inline-block;
      text-indent: 5px;
    }
  }
  ${mediaBp('desktop')} {
    font-size: calc(100px + (128 - 100) * ((100vw - 600px) / (1920 - 600)));
    & > b {
      font-weight: 900;
      display: inline-block;
      text-indent: 200px;
    }
    & > i {
      font-style: normal;
      display: inline-block;
      text-indent: 5px;
    }
  }
`;

export const ColoredText = styled.span`
  color: #e50185;
`;

export const GreyText = styled.span`
  color: #b2b2b2;
`;

export const TextWrapper = styled.div`
  ${mediaBp('desktop')} {
    display: flex;
    justify-content: center;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 54px;
  color: #292929;
  font-family: Roboto;
  font-weight: 700;
  line-height: 130%; /* 18.2px */
  text-transform: uppercase;
  text-align: left;
  border: none;
  cursor: pointer;
  margin: 40px 0 0 16px;
  font-size: 10px;
  ${mediaBp('tablet')} {
    width: 242px;
    height: 54px;
    font-size: 12px;
    margin: -30px 40% 0 38%;
  }
  ${mediaBp('desktop')} {
    width: 242px;
    height: 54px;
    font-size: 14px;
    margin: -30px 45% 0 55%;
  }
`;
export const Content = styled(motion.p)`
  color: #292929;
  text-align: justify;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  font-size: calc(10px + (16 - 10) * ((100vw - 320px) / (768 - 320)));
  width: 47%;
  text-indent: 35px;
  margin-bottom: calc(10px + (70 - 20) * ((100vw - 320px) / (1920 - 320)));
  ${mediaBp('tablet')} {
    line-height: 130%; /* 18.2px */
    text-indent: 40px;
    font-size: calc(10px + (16 - 10) * ((100vw - 768px) / (1280 - 768)));
    width: calc(178px + (376 - 178) * ((100vw - 768px) / (1920 - 768)));
    margin-bottom: calc(12px + (30 - 12) * ((100vw - 768px) / (1280 - 768)));
  }
  ${mediaBp('desktop')} {
    line-height: 130%; /* 18.2px */
    text-indent: 45px;
    font-size: calc(16px + (18 - 16) * ((100vw - 1280px) / (1920 - 1280)));
    width: calc(178px + (376 - 178) * ((100vw - 768px) / (1920 - 768)));
    margin-bottom: calc(20px + (80 - 20) * ((100vw - 1280px) / (1920 - 1280)));
  }
`;
export const BlurContent = styled.span`
  color: rgba(41, 41, 41, 0.5);
`;
export const MainBtn = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  background-color: transparent;
`;

export const BtnBlock = styled.div`
  position: absolute;
  text-align: center;
  left: 1%;
  bottom: 0%;
  ${mediaBp('tablet')} {
    position: absolute;
    text-align: center;
    left: 2%;
    bottom: 0%;
  }
  ${mediaBp('desktop')} {
    position: absolute;
    text-align: center;
    left: 2%;
    bottom: 0;
  }
`;
export const BtnText = styled(motion.p)`
  color: #e50185;
  font-family: 'PhontPhreaksHandwriting';
  font-size: calc(30px + (64 - 30) * ((100vw - 768px) / (1920 - 768)));
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 40px */
  letter-spacing: 2px;
  text-transform: uppercase;
`;
export const BtnBlockRevers = styled.div`
  position: absolute;
  text-align: center;
  left: 51%;
  bottom: 0%;
  width: 100%;
  ${mediaBp('tablet')} {
    position: absolute;
    text-align: center;
    left: 50%;
    bottom: 0;
  }
  ${mediaBp('desktop')} {
    position: absolute;
    text-align: center;
    left: 52%;
    bottom: 0;
  }
`;

export const RelativBox = styled.div`
  position: relative;
  width: 100%;
`;
export const StartLineContainer = styled.div`
  position: relative;
  margin-top: -15%;
  &:before {
    content: '';
    display: block;
    padding-top: 20%; /* initial ratio of 1:1*/
  }
`;
export const StartText = styled(motion.p)`
  font-size: calc(30px + (160 - 30) * ((100vw - 320px) / (1920 - 320)));
  position: absolute;
  color: #e50185;
  font-family: 'PhontPhreaksHandwriting';

  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 150px */
  letter-spacing: 6.5px;
  text-transform: uppercase;
  top: 40%;
  left: 65%;
  ${mediaBp('tablet')} {
    left: 73%;
  }
  ${mediaBp('desktop')} {
    left: 77%;
  }
`;
export const LineBox = styled(motion.svg)`
  width: 90%;
  position: absolute;
  top: 0;
  left: 12%;
  ${mediaBp('tablet')} {
    width: 65%;
    position: absolute;
    top: 20%;
    left: 34%;
  }
  ${mediaBp('desktop')} {
    width: 65%;
    position: absolute;
    top: 20%;
    left: 37%;
  }
`;

export const BackDrop = styled(motion.div)`
  top: 0%;
  position: absolute;
  background: linear-gradient(180deg, rgb(239, 239, 239, 1) 74%, rgb(239, 239, 239, 0.01) 100%);
  width: 100%;
  height: 110%;
  z-index: 5;
`;
