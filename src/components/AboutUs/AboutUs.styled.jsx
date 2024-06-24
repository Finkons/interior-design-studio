import styled from "styled-components";

export const Wrapper = styled.div`
// desktop
padding: 0 40px;
display: flex;
position: relative;
padding-top: 138px;
padding-bottom: 370px;
`;

export const SectionConteiner =styled.section`
padding: 0 40px;
position: relative;
`;
export const TextBlock = styled.div`

`;
export const NumberBlock = styled.div`
text-align: end;

`;
export const CenterBlock = styled.div`
text-align: end;
padding: 0 188px;

`;

export const NumberTitle = styled.div`
color: var(--1, #292929);
font-family: Poppins;
font-size: 128px;
font-style: normal;
font-weight: 900;
line-height: 120%; /* 153.6px */
letter-spacing: -8.96px;
`;
export const Title = styled.p`
color: #292929;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 27px */
text-transform: uppercase;
`;
export const GrayTitle = styled.p`
font-size: 128px;
font-style: normal;
font-weight: 900;
line-height: 120%; /* 153.6px */
letter-spacing: -8.96px;
background: var(--Blur, linear-gradient(204deg, #B2B2B2 -11.53%, rgba(178, 178, 178, 0.00) 91.86%));
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
/* Blur */
filter: blur(2.5px);
`

export const Text = styled.p`
color: var(--Color-Neutral-black, #808080);
font-family: Poppins;
font-size: 60px;
font-style: normal;
font-weight: 900;
line-height: 100%; /* 60px */
letter-spacing: -3px;
text-transform: uppercase;
`;
export const ColoredText = styled.span`
color: #E50185;
`
export const BlurText = styled.span`
background: linear-gradient(270deg, #B2B2B2 0.85%, rgba(178, 178, 178, 0.00) 112.37%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
filter: blur(2.5px);
`
export const AncorLink = styled.div`
color: #B4B4B4;
text-align: justify;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 120%; /* 19.2px */
text-transform: uppercase;


padding-top: 10px;
margin-right: 122px;
`;


export const ImageBox = styled.div`
position: absolute;
background-image: url('sketch.svg');
width: 950px;
height: 1059px;
top: -120px;
right: 80px;

`;
export const FlexList = styled.ul`
display: flex;
justify-content: flex-end;
`;
export const Li = styled.li`
margin-right: 108px;
&:last-child {
margin-right: 0px;
margin-left: 0px
}
`;