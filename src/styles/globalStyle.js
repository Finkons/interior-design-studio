import { createGlobalStyle } from "styled-components";
import mediaBp from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'PhontPhreaksHandwriting';
    src: url('/fonts/PhontPhreaks Handwriting.ttf') format('truetype');
}
body {
    overflow-x: hidden !important;
    margin: 0 auto;
     background-image: url('BG.png');
    // backdrop-filter: contrast(0%) brightness(2);
     backdrop-filter: blur(12px);
     -webkit-backdrop-filter: blur(12px);
    transition: backdrop-filter 5s ease, background 13s ease;
    background-color: rgba(240, 240, 240, 1);
    background-size: cover;
    background-repeat: no-repeat;
    line-height: 100%;
    font-style: normal;
    
  }
  s * {
    box-sizing: border-box;
  }

  h1,
h2,
h3,
h4,
p,
li {
  margin: 0;
  padding: 0;
}
  
  a {
    text-decoration: none;
    color: black;
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
  
  li {
    list-style: none;
  }
  
  button {
    cursor: pointer;
  }
  
  input {
    outline: none;
  }
  
  .img {
    width: 100%;
    height: auto;
  }
  .container {
        max-width: 320px;
        margin: 0 auto;
        padding: 0 15px;
      
        ${mediaBp('tablet')} {
          max-width: 768px;
        }
       ${mediaBp('deskop')} {
          max-width: 1280px;
        }
      }
     
`;
