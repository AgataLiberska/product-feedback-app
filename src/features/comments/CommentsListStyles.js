import styled from 'styled-components';

export const CommentsListContainer = styled.div`
    padding: 1.5rem;
    background-color: var(--white);
    border-radius: 0.625rem;

    & li {
        padding: 1.5rem 0;

        &:last-child {
            padding-bottom: 0;
        }

        &:not(:last-child) {
            border-bottom: 1px solid var(--background-color);
        }
    }

    @media screen and (min-width: 768px) {
        padding: 1.5rem 2rem 2rem;

        & li {
            padding: 2rem 0;
        }
    }
`

export const CommentsCount = styled.p`
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--dark-grey-blue);
`