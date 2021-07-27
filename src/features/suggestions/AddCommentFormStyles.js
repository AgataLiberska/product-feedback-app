import styled from 'styled-components';

export const FormContainer = styled.section`
    padding: 1.5rem;
    background-color: var(--white);
    border-radius: 0.625rem;

    @media screen and (min-width: 768px) {
        padding: 1.5rem 2rem 2rem;
    }
`

export const FormHeading = styled.h2`
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
    line-height: 1.625rem;
    color: var(--dark-grey-blue);
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 5rem;
    margin-bottom: 1rem;
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

export const BottomFormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CharactersLeft = styled.div`
    font-size: 0.875rem;
    color: var(--dark-grey);
    line-height: 1.25rem;

    @media screen and (min-width: 768px) {
        font-size: 1rem;
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

    @media screen and (min-width: 768px) {
        font-size: 0.875rem;
        padding: 0.75rem 1.5rem;
    }
`