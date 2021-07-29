import styled from 'styled-components';

export const TextArea = styled.textarea`
    width: 100%;
    height: 5rem;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 0.625rem;
    background-color: var(--background-color);
    transition: border-color 0.3s ease;
    color: var(--dark-grey);

    &:focus {
        outline: 0;
        border: 1px solid var(--dark-blue);
    }

    &::placeholder {
        color: var(--light-grey);
    }
`

export const SubmitButton = styled.button`
    padding: 0.625rem 1rem;
    background-color: var(--primary-btn);
    border: 0;
    border-radius: 0.625rem;
    font-size: 0.75rem;    
    font-weight: 700;
    color: var(--white);
    white-space: nowrap;

    @media screen and (min-width: 768px) {
        font-size: 0.875rem;
        padding: 0.75rem 1.5rem;
    }
`