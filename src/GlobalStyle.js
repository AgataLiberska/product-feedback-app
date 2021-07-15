import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --background-color: #f7f8fd;
        --white: #fff;
        --tablet: 768px;
        --desktop: 1024px;

    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: inherit;
    }

    body {
        min-height: 100vh;
        background-color: var(--background-color);
        font-family: 'Jost', sans-serif;
    }

    ul, ol {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;