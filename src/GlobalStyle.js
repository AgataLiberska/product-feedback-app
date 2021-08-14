import { createGlobalStyle } from 'styled-components';
import downArrow from './assets/shared/icon-arrow-down.svg';

const GlobalStyle = createGlobalStyle`

    :root {
        --background-color: #f7f8fd;
        --dark-blue: #4661E6;
        --dark-blue-hover: #7C91F9;
        --medium-blue: #CFD7FF;
        --light-blue: #f2f4ff;
        --dark-grey-blue: #3A4374;
        --dark-grey-blue-hover: #656EA3;
        --light-grey: #8C92B3;
        --medium-grey: #647196;
        --dark-grey: #373f68;
        --white: #fff;
        --red: #D73737;
        --red-hover: #E98888;
        --primary-btn: #ad1fea;
        --primary-btn-hover: #C75AF6;
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
        overflow-x: hidden;
        position: relative;
        min-height: 100vh;
        background-color: var(--background-color);
        font-family: 'Jost', sans-serif;
    }

    ul, ol, li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    input, textarea, select {
        display: block;
        width: 100%;
        padding: 1rem;
        border: 1px solid var(--background-color);
        border-radius: 0.625rem;
        background-color: var(--background-color);
        transition: border-color 0.3s ease;
        font-size: 0.8125rem;
        color: var(--dark-grey);

        &:focus {
            outline: 0;
            box-shadow: 0 0 0 1px var(--dark-blue);
        }

        &::placeholder {
            color: var(--light-grey);
        }

        @media screen and (min-width: 500px) {
            font-size: 1rem;
            padding: 1rem 1.25rem;  
        }
    }

    input, textarea {
        cursor: pointer;
    }

    textarea {
        resize: vertical;
    }
    
    select, option {
        text-transform: capitalize;
        cursor: pointer;
    }

    select {
        appearance: none;
        background-image: url('${downArrow}');
        background-repeat: no-repeat;
        background-position: top 26px right 1.25rem;
    }

    button {
        padding: 0.625rem 1rem;
        border-radius: 0.625rem;
        border: 0;
        font-size: 0.75rem;    
        font-weight: 700;
        color: var(--white);
        white-space: nowrap;
        cursor: pointer;
        transition: backgroud-color 0.3s ease, color 0.3s ease;

        @media screen and (min-width: 768px) {
            font-size: 0.875rem;
            padding: 0.75rem 1.5rem;
        }
    }


`;

export default GlobalStyle;