import styled from 'styled-components';

export const RoadMapPageWrapper = styled.div`
    @media screen and (min-width: 768px) {
        padding: 3.5rem 2.5rem;
        max-width: 72rem;
        margin: auto;
    }
`

export const RoadMapHeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    background-color: var(--dark-grey-blue);
    color: var(--white);

    @media screen and (min-width: 375px) {
        padding: 1.625rem 1.5rem;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 2rem;
        padding: 1.625rem 2rem;
        border-radius: 0.625rem
    }
`

export const RoadMapHeading = styled.h1`
    font-size: 1.125rem;
    line-height: 1.625rem;

    @media screen and (min-width: 768px) {
        margin-top: 0.5rem;
        font-size: 1.5rem;
        line-height: 2.125rem;
    }
`