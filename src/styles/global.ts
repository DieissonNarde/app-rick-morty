import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Shlop';
    src: url('assets/fonts/shlop-rg.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background: #312E38;
    color: #fff;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font-family: "Shlop", sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;