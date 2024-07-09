import styled from 'styled-components';
import mediaBp from '../../styles/breakpoints';
import { setBGImage } from '../../helpers/setBGImage';
import { setWidthImage, setHeightImage } from '../../helpers/setSizeImage';
import { motion } from 'framer-motion';
export const SectionConteiner = styled.section`
margin: 0 auto;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    padding: 235px 0 6px 0;
    max-width: 1920px;
  }
`;
export const AncorLink = styled.div`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    color: #b4b4b4;
    text-align: justify;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    line-height: 120%;
    text-transform: uppercase;

    padding-right: 40px;
    text-align: right;
  }
`;



export const BlockList = styled.ul``;

export const Li = styled.li`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    display:flex;
    position: relative;
    margin-bottom: 200px;
  }
`;
export const LiRevers = styled.li`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    display:flex;
    position: relative;
    margin-bottom: 200px;
    flex-direction: row-reverse;
  }
`;

export const PhotoWrapper = styled.div`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    width: ${setWidthImage};
    height: ${setHeightImage};
    background-image: ${setBGImage};
  }
`;

export const Photo = styled.div`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    width: 100%;
    height: 100%;
    backdrop-filter: grayscale(80%);
    transition: backdrop-filter 0.4s ease-in-out;
    &:hover {
      backdrop-filter: grayscale(0%);
      // for Safari always use -webkit- prefix
      --webkit-backdrop-filter: grayscale(0%);
    }
  }
`;

export const TextBlock = styled.p`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {

    height: 960px;
    width: 920px;
    text-align: left;
    font-size: 400px;
    font-weight: 900;
    line-height: 80%;
    text-transform: uppercase;
    opacity: 0.3;
    background: var(--2-Shadov, linear-gradient(270deg, #292929 2.75%, rgba(143, 143, 143, 0) 174.73%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    mix-blend-mode: color-burn;
    filter: blur(2.5px);

    word-break: break-word;
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
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    line-height: 100%;
    font-weight: 900;
    color: #808080;
    font-size: 128px;
    letter-spacing: -6.4px;
    text-transform: uppercase;
    & > b {
    display: inline-block;
    font-weight: 900;
    text-indent: 200px;
    }
  }
`;

export const ColoredText = styled.span`
  color: #e50185;
`;

export const GreyText = styled.span`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
color: #b2b2b2;
  }
`;

export const TextWrapper = styled.div`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    display: flex;
    justify-content: center;
  }
`;

export const Button = styled.button`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    width: 242px;
    height: 54px;
    color: #292929;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 130%; /* 18.2px */
    text-transform: uppercase;
    text-align: left;
    border: none;
    cursor: pointer;

    margin: -30px 45% 0 55%;
  }
`;
export const Content = styled.p`
  color: #292929;
  text-align: justify;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
  width: 230px;
  
  text-indent: 62px;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    text-indent: 45px;
    font-size: 18px;
    width: 376px;
    margin-bottom: 98px;
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
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 40px */
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: transparent;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {}
    font-size: 64px;
    letter-spacing: 3.2px;
  
    }
  }
`;
export const HoverBox = styled.div``
export const PositionBottom=styled.div`
left:75%;
bottom:0;
position: absolute;
`;
export const PositionTop240=styled.div`
top: 240px;
left: 62%;
position: absolute;
`;
export const BtnBlock=styled.div`
padding-left: 40px;
position: absolute;
text-align: center;
left: 50%;
bottom:0;
`;
export const BtnBlockRevers=styled.div`
position: absolute;
text-align: center;
left: 28%;
bottom:0;
`;
export const PositionTop0=styled.div`
top: 0px;
left: 25%;
position: absolute;
`;
export const PositionRight0=styled.div`

top: 240px;
left: 0;
position: absolute;
`;
export const RelativBox=styled.div`
  position: relative;
  width: 100%;

  `;
export const StartText = styled(motion.p)`
  position: absolute;
  top: -104px;
left: 75%;
  width: 237px;
color: #E50185;
font-family: 'PhontPhreaksHandwriting';
font-size: 150px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 150px */
letter-spacing: 7.5px;
text-transform: uppercase;
`;
export const LineBox = styled(motion.svg)`
  width: 65%;
position: absolute;
  top: -210px;
  left: 38%;`;