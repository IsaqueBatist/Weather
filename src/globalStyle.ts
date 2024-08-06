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
    background: #000 !important;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(68,68,68,1) 100%) !important;
    width: 100% !important;
    height: 100vh !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
`