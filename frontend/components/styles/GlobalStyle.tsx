import { createGlobalStyle } from "styled-components";
import { theme } from "../Page";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'gotham';
    src: url('../static/GothamNarrowBook.woff2');
  }
  html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: 'gotham';
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }
    a {
        text-decoration: none;
        color: {theme.black}
    }
`;

export default GlobalStyle;
