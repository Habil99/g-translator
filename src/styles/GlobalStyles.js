import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Prompt", sans-serif;
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;

    &:focus {
      outline: none;
    }
  };

  html,
  body {
    height: 100%;
  }

  body {
    font-family: "Prompt", sans-serif;
    background-color: ${({ theme }) => theme.colors.dark.main};
    color: ${({ theme }) => theme.colors.dark.secondary};
  }
`
