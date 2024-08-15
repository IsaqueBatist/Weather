import { createGlobalStyle } from "styled-components";
import { GlobalStyleProps } from "./types/globalstyle";
import { useEffect } from "react";

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  *{
    margin: 0;
    padding: 0;
    color: white;
    box-sizing: border-box;
  }
  html{
    height: 100%; 
  }
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: ${props => props.bgColor};
    bakcground-size: cover;
    background-repeat: no-repeat;
    font-family: 'Inter', sans-serif;
    @media (max-width: 768px) {
      height: calc( 2 * 100vh - 1000px);
    }
  }
  :root{
    font-size: 10px;
    @media (max-width: 768px) {
      font-size: 8px;
    }
  }
`;