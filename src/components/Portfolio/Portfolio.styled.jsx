import styled from 'styled-components';
import mediaBp from '../../styles/breakpoints';

export const SectionConteiner = styled.section`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    padding: 235px 0 6px 0;
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

export const BlockWrapper = styled.div`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    display: flex;
  }
`;

export const BlockList = styled.ul``;

export const Li = styled.li`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    display: flex;
    padding-bottom: 200px;
    & > p {
      margin-left: -24px;
      padding-right: 290px;
    }
    &:nth-child(2n) {
      & > div {
        margin-right: 0;
        margin-left: -24px;
      }
      & > p {
        margin-left: 0;
        padding-right: 0;
      }
      flex-direction: row-reverse;
    }
  }
`;

export const PhotoWrapper = styled.div`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    width: 50%;
    background-image: ${props => `url(${props.children.props.img})`};
  }
`;

export const Photo = styled.div`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    width: 950px;
    height: 960px;
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
  }
`;

export const ColoredText = styled.span`
  color: #e50185;
`;

export const BlurText = styled.span`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    background: linear-gradient(93deg, #b2b2b2 2.07%, rgba(178, 178, 178, 0) 106.43%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: blur(2.5px);
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
