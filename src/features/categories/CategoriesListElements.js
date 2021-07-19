import styled from 'styled-components';

export const CategoryButton = styled.button`
    padding: 0.3125rem 1rem 0.375rem;
    background-color: ${({selected}) => selected ? 'var(--dark-blue)' : 'var(--light-blue)'};
    border: 0;
    border-radius: 0.625rem;
    text-transform: capitalize;
    font-size: 0.8125rem;
    font-weight: 600;
    color: ${({selected}) => selected ? 'var(--white)' : 'var(--dark-blue)'};
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:active {
        background-color: var(--dark-blue);
    }

    @media screen and (min-width: var(--tablet)) {

        &:hover {
            background-color: var(--medium-blue);
        }

    }
`

export const CategoryContainer = styled.div`
    display: flex;
    gap: 0.875rem 0.5rem;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 1.5rem 1.125rem 1.5rem 1.5rem;
    background-color: var(--white);
    border-radius: 0.625rem;

`