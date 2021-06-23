import { createGlobalStyle } from 'styled-components';

import SFPro from '../fonts/SF-Pro.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'SF Pro';
    src: url(${SFPro}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #FFFCF9;
    color: #000;
  }
  body, input, button {
    font-family: 'SF Pro', sans-serif;
    font-size: 16px;
  }
  button {
    cursor: pointer;
  }
`;
