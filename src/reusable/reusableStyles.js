import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
    font-size: 0.8125rem;
    font-weight: 700;
    color: var(--medium-grey);

    & img {
        padding-right: 1rem;
    }

    @media screen and (min-width: 768px) {
        font-size: 0.875rem;
        transition: text-decoration 0.3s ease;

        &:hover {
            text-decoration: underline;
        }
    }
`
// this needs to be in the reply styles not used anywhere else
export const TextArea = styled.textarea`
    width: 100%;
    height: 5rem;
`

export const SubmitButton = styled.button`
    background-color: var(--primary-btn);
`

export const CancelButton = styled(Link)`
    padding: 0.625rem 1rem;
    border-radius: 0.625rem;
    background-color: var(--dark-grey-blue);
    font-size: 0.75rem;    
    font-weight: 700;
    color: var(--white);
    white-space: nowrap;
    cursor: pointer;
    text-align: center;

    @media screen and (min-width: 768px) {
        font-size: 0.875rem;
        padding: 0.75rem 1.5rem;
    }
`

export const DeleteButton = styled.button`
    background-color: var(--red);
`