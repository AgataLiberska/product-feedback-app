import styled from 'styled-components';

export const HomePageContainer = styled.div`

    @media screen and (min-width: 768px) {
        margin: 3.5rem 2.5rem 7rem;
    }

    @media screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: 16rem auto;
        gap: 1.75rem;
        max-width: 57rem;
        margin: 5.5rem auto;
    }
`