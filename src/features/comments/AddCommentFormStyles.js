import styled from 'styled-components';

export const FormWrapper = styled.section`
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
export const FormContainer = styled.form`
    display:flex;
    flex-direction: column;
    gap: 1rem;
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

