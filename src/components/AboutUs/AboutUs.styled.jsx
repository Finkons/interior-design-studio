import styled from 'styled-components';
import mediaBp from '../../styles/breakpoints';
import { motion } from 'framer-motion';
export const SectionConteiner = styled.section`
  position: relative;
  margin: 0 auto;
  padding-bottom: 100px;
  overflow: hidden;
`;
export const TextBlock = styled.div`
  width: calc(300px + (1500 - 320) * ((100vw - 320px) / (1920 - 320)));
  color: var(--Color-Neutral-black, #808080);
  font-family: Poppins;
  font-size: clamp(1.75rem, 2vw + 1.35rem, 3.75rem);
  font-style: normal;
  font-weight: 900;
  line-height: 100%; /* 32px */
  letter-spacing: -0.06em;
  text-transform: uppercase;
`;
export const NumberBlock = styled.div`
  position: absolute;
  right: 6px;
  top: calc(570px + (660 - 570) * ((100vw - 780px) / (780 - 320)));
  padding-top: 110px;
  ${mediaBp('tablet')} {
    position: absolute;
    top: calc(420px + (520 - 420) * ((100vw - 1280px) / (1280 - 768)));
    right: 10px;
  }
  ${mediaBp('desktop')} {
    position: absolute;
    top: calc(340px + (680 - 340) * ((100vw - 780px) / (1920 - 320)));
    right: 0;
  }
`;
export const CenterBlock = styled.div`
  text-align: start;
  color: var(--1, #292929);
  margin-bottom: 20px;
  padding-left: calc(160px + (300 - 160) * ((100vw - 320px) / (768 - 320)));
  ${mediaBp('tablet')} {
    padding-left: 200px;
    margin-bottom: 25px;
  }
  ${mediaBp('desktop')} {
    padding-left: 250px;
    margin-bottom: 40px;
  }
`;
export const NumberTitle = styled(motion.span)`
  font-family: Poppins;
  font-size: calc(60px + (128 - 60) * ((100vw - 320px) / (1920 - 320)));
  font-style: normal;
  font-weight: 900;
  line-height: 120%; /* 72px */
  letter-spacing: -4.2px;
  ${mediaBp('tablet')} {
    letter-spacing: -6.4px;
  }
  ${mediaBp('desktop')} {
    letter-spacing: -8.96px;
  }
`;
export const Title = styled.p`
  color: #292929;
  font-family: Poppins;
  font-size: calc(10px + (18 - 10) * ((100vw - 320px) / (1920 - 320)));
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
  text-transform: uppercase;
  margin-top: -14px;
  text-align: start;
  ${mediaBp('tablet')} {
    margin-top: -20px;
  }
  ${mediaBp('desktop')} {
    margin-top: -28px;
  }
`;

export const Space = styled.span`
  white-space: nowrap;
  ${mediaBp('tablet')} {
    white-space: normal;
  }
  ${mediaBp('desktop')} {
    white-space: normal;
  }
`;
export const Text = styled.p`
  padding-left: calc(70px + (239 - 70) * ((100vw - 320px) / (1920 - 320)));
`;
export const TextIndent = styled.p`
  padding-left: 0px;
  ${mediaBp('tablet')} {
    padding-left: calc(70px + (239 - 70) * ((100vw - 320px) / (1920 - 320)));
    text-indent: 80px;
  }
  ${mediaBp('desktop')} {
    padding-left: calc(70px + (239 - 70) * ((100vw - 320px) / (1920 - 320)));
    text-indent: 180px;
  }
`;
export const ColoredText = styled.span`
  color: #e50185;
`;
export const BlurText = styled.span`
  color: #b2b2b2;
`;
export const AncorLink = styled.div`
  color: #b4b4b4;
  text-align: justify;
  font-family: Roboto;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 9.6px */
  text-transform: uppercase;
  padding: 4px 4px;
  ${mediaBp('tablet')} {
    font-size: 10px;
    padding: 6px 6px;
  }
  ${mediaBp('desktop')} {
    font-size: 16px;
    padding: 10px 10px;
    min-width: 78px;
  }
`;

export const StyledSvg = styled.svg`
  height: auto;
  left: 12%;
  position: absolute;
  overflow: hidden;
  top: 150px;
  width: calc(460px + (950 - 460) * ((100vw - 320px) / (1920 - 320)));
  ${mediaBp('tablet')} {
    left: 50%;
    top: -138px;
  }
  ${mediaBp('desktop')} {
    left: 50%;
    top: -138px;
  }
`;
export const FlexList = styled.ul`
  padding-left: 12px;
  display: flex;
  justify-content: space-around;
`;
export const Li = styled.li`
  text-align: start;
  color: #b2b2b2;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    margin-right: calc(40px + (90 - 40) * ((100vw - 1280px) / (1920 - 1280)));
    &:last-child {
      margin-right: 0px;
      margin-left: 0px;
    }
  }
`;

export const BlurContent = styled.span`
  color: rgba(41, 41, 41, 0.5);
`;

export const TitleCenter = styled.p`
  font-size: calc(10px + (18 - 10) * ((100vw - 320px) / (1920 - 320)));
  color: #292929;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
  text-transform: uppercase;
  text-align: start;
  margin-top: -18px;

  ${mediaBp('tablet')} {
    margin-top: -20px;
  }
  ${mediaBp('desktop')} {
    margin-top: -28px;
  }
`;
export const Plus = styled.span`
  font-family: Poppins;
  font-size: calc(60px + (128 - 60) * ((100vw - 320px) / (1920 - 320)));
  font-style: normal;
  font-weight: 900;
  line-height: 120%; /* 72px */
  letter-spacing: -4.2px;
  padding-left: 6px;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    padding-left: 15px;
    letter-spacing: -8.96px;
  }
`;

export const NumberContainer = styled.div`
  width: 100vw;
  ${mediaBp('tablet')} {
    width: calc(400px + (800 - 400) * ((100vw - 768px) / (1920 - 768)));
  }
  ${mediaBp('desktop')} {
    width: calc(300px + (800 - 300) * ((100vw - 320px) / (1920 - 320)));
  }
`;
