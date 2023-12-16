import { createGlobalStyle } from "styled-components";

export const GlobalTheme = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
}

img {
    display: inline-block;
    max-width: 100%;
}

input, button, textarea, select {
    font: inherit;
}

body {
    line-height: 1.3;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.color.base_100};
}

main {
    padding-top:  6.8rem;
}
`;