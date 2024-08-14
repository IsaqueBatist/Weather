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
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100svh;
    min-height: 100vh;
    background: ${props => props.bgColor};
    font-family: 'Inter', sans-serif;
  }
  :root{
    font-size: 10px;
  }
`;