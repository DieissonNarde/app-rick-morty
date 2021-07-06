import { createGlobalStyle } from 'styled-components';

import shlopFont from '../assets/fonts/shlop.ttf';


export default createGlobalStyle`
  @font-face {
    font-family: 'Shlop';
    src: local(Shlop), url(${shlopFont});
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #312E38;
    color: #fff;
    -webkit-font-smoothing: antialiased
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: "Shlop", sans-serif;
    font-weight: 500;
  }

  p, input, button {
    font-family: 'Nova Cut', cursive;
  }

  button {
    cursor: pointer;
  }
`;