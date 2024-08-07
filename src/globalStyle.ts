import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Inter;
    font-size: 12px;
    transition: all 0.3s;
  }
  body{
    background: ${({theme}) => theme.body.background};
    width: 100% !important;
    height: 100vh !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
`