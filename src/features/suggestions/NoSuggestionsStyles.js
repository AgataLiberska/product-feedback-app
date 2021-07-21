import styled from 'styled-components';
import EmptyImage from '../../assets/suggestions/illustration-empty.svg';

export const NoSuggestionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4.75rem 1.5rem;
    background-color: var(--white);
    border-radius: 0.625rem;
    text-align: center;

    @media screen and (min-width: 768px) {
        padding: 6.875rem 1.5rem;
    }
`

export const NoSuggestionsImage = styled.div`
    width: 100%;
    height: 34vw;
    max-height: 8.5rem;
    margin-bottom: 2.5rem;
    background-image: url(${EmptyImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;

    @media screen and (min-width: 768px) {
        margin-bottom: 3.375rem;
    }
`

export const NoSuggestionsHeading = styled.h2`
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--dark-grey-blue);
    line-height: 1.625rem;

    @media screen and (min-width: 768px) {
        font-size: 1.5rem;
    } 
`

export const NoSuggestionsText = styled.p`
    max-width: 26rem;
    margin: 0 auto 1.5rem;
    font-size: 1rem;
    color: var(--medium-grey);
    line-height: 1.125rem;

    @media screen and (min-width: 768px) {
        margin-bottom: 3rem;
    }
`