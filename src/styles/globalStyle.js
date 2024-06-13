import { createGlobalStyle } from "styled-components";
import mediaBp from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
body {
    transition: all 0.5s ease;
    font-family: "Poppins", sans-serif;
    background-color: rgba(240, 240, 240, 1); 
    background-image: url('BG.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
  s * {
    box-sizing: border-box;
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
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 15px;
      
        ${mediaBp("tablet")} {
          max-width: 768px;
        }
       ${mediaBp("mobile")} {
          max-width: 320px;
        }
      }
`;
