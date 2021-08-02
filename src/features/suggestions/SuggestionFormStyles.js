import styled from 'styled-components';

export const FormPageWrapper = styled.div`
    max-width: 33.75rem;
    margin: auto;
    padding: 2rem 1.5rem 5rem;
    
`

export const FormContainer = styled.main`
    margin-top: 3.5rem;
    padding: 2.75rem 1.5rem 1.5rem;
    background-color: var(--white);
    border-radius: 0.625rem;
`

export const FormHeading = styled.h1`
    margin-bottom: 1.5rem;
    color: var(--dark-grey-blue);
    font-size: 1.125rem;
    line-height: 1.625rem;
`


export const FormControl = styled.div`
    margin-bottom: 1.5rem;

    &:last-of-type {
        margin-bottom: 2.5rem;
    }

`

export const FormInput = styled.input`
    border: ${props => (props.showError ? '1px solid #D73737' : '1px solid var(--background-color)')};
}
`


export const FormLabel = styled.label`
    display: block;
    margin-bottom: 1rem;
    font-size: 0.8125rem;
    color: var(--dark-grey);
    line-height: 1.125rem;

    @media screen and (min-width: 500px) {
        font-size: 0.875rem;
    }
`

export const FormLabelHeading = styled.span`
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 700;
    line-height: 1.125rem;
    color: var(--dark-grey-blue);

`

export const FeedbackFormTextArea = styled.textarea`
    border: ${props => (props.showError ? '1px solid #D73737' : '1px solid var(--background-color)')};}
    height: 7.5rem;
`

export const FormError = styled.p`
    margin-top: 0.25rem;
    font-size: 0.8125rem;
    color: var(--red);

    @media screen and (min-width: 500px) {
        font-size: 0.875rem;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 500px) {
        flex-direction: row;
        justify-content: flex-end;
    }
`