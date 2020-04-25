import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  ::before,
  ::after {
    box-sizing: inherit;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #eceff1;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family: 'Ubuntu', sans-serif;
    color: #263238;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }
`;
