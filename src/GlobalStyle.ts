import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    color: white;
    border-box: box-sizing;
  }
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #212121;
    font-family: 'Inter', sans-serif;
  }
  :root{
    font-size: 10px;
  }
`;