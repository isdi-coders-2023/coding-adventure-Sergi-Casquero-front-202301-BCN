import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *, ::after, ::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    background-color: ${(props) => props.theme.colors.backgroundColor};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1,h2 {
    padding: 0;
    margin: 0;
  }

  ol, ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

`;

export default GlobalStyles;
