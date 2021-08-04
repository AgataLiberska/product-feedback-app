import styled from 'styled-components';

export const NotAuthorisedCard = styled.div`
    background-color: var(--white);
    boder-radius: 0.625rem;
    margin-top: 1.5rem;
    padding: 1.5rem;
`

export const NotAuthorisedImgWrapper = styled.div`
    text-align: center;
    margin-bottom: 1.5rem;

    @media screen and (min-width: 500px) {
        margin-bottom: 2rem;
    }
`

export const NotAuthorisedImg = styled.img`
    object-fit: contain;
    width: 400px;
    max-width:70vw;
`

export const NotAuthorisedHeading = styled.h1`
    font-size: 1.125rem;
    color: var(--dark-grey-blue);
    text-align: center;

    @media screen and (min-width: 500px) {
        font-size: 1.5rem;
    }
`