import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --background-color: #f7f8fd;
        --dark-blue: #4661E6;
        --dark-blue-hover: #7C91F9;
        --medium-blue: #CFD7FF;
        --light-blue: #f2f4ff;
        --dark-grey-blue: #3A4374;
        --light-grey: #8C92B3;
        --medium-grey: #647196;
        --dark-grey: #373f68;
        --white: #fff;
        --primary-btn: #ad1fea;
        --planned-color: #f49f85;
        --in-progress-color: #ad1fea;
        --live-color: #62bcfa;
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
        position: relative;
    }

    ul, ol {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }


`;

export default GlobalStyle;