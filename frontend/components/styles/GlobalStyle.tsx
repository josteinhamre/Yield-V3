import { createGlobalStyle } from "styled-components";
import { theme } from "../Page";

const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: 'gotham';
    src: url('../static/GothamNarrowBook.woff2');
  } */
  html {
        box-sizing: border-box;
        font-size: 16px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: 'avenir next';
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
        color: ${theme.mediumAquamarine};
    }
    p {
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }
    p, h1, h2, h3, h4, h5, h6, a {
      margin: 0;
      padding: 0;
    }
`;

export default GlobalStyle;
