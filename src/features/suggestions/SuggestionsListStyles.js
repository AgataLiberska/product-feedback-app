import styled from 'styled-components';


// Home page list

export const SuggestionsListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
    background-color: var(--dark-grey);

    @media screen and (min-width: 375px) {
        padding: 0.5rem 1.5rem;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 1.5rem;
        padding: 0.875rem 0.75rem 0.875rem 1.5rem;
        border-radius: 0.625rem;
    }
`

export const SuggestionHeadingSortWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const SuggestionsHeading = styled.h1`
    display: none;

    & img {
        padding-right: 1rem;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        padding-right: 2.25rem;
        font-size: 1.125rem;
        font-weight: 700;
        color: var(--white);
    }

`

export const SuggestionSortContainer = styled.div`
    display: flex;
    align-items:center;
    
`

export const SortLabel = styled.label`
    padding-right: 0.25rem;
    font-size: 0.75rem;
    color: var(--white);
    white-space: nowrap;
`

export const SortSelect = styled.select` 
    padding: initial;
    background-color: var(--dark-grey);
    border: 0;
    font-size: 0.75rem;
    font-weight: bold;
    color: var(--white);
`

// The list container

export const SuggestionsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 0 1.5rem;

    @media screen and (min-width: 768px) {
        padding: unset;
    }
`