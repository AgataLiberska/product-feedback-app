import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled.button`
    padding-left: 0;
    background-color: transparent;
    font-size: 0.8125rem;
    font-weight: 700;
    color: ${props => props.darktext ? 'var(--medium-grey)' : 'var(--white)'};

    & svg {
        margin-right: 1rem;
    }

    & svg path {
        stroke: ${props => props.darktext ? 'var(--dark-blue)' : 'var(--white)'};
    }

    &:hover {
        text-decoration: underline;
    }

    &:focus {
        text-decoration: underline;
        outline: 0;
        box-shadow: 0 0 0 2px var(--dark-blue);
    }

    @media screen and (min-width: 768px) {
        font-size: 0.875rem;
        transition: text-decoration 0.3s ease;
    }
`
// this needs to be in the reply styles not used anywhere else
export const TextArea = styled.textarea`
    width: 100%;
    height: 5rem;
`

export const SubmitButton = styled.button`
    background-color: var(--primary-btn);

    &:hover {
        background-color: var(--primary-btn-hover);
    }

    &:focus {
        background-color: var(--primary-btn-hover);
        outline: 0;
        box-shadow: 0 0 0 1px white, 0 0 0 3px var(--primary-btn);
    }
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
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--dark-grey-blue-hover);
    }

    &:focus {
        background-color: var(--dark-grey-blue-hover);
        outline: 0;
        box-shadow: 0 0 0 1px white, 0 0 0 3px var(--dark-grey-blue);
    }

    @media screen and (min-width: 768px) {
        font-size: 0.875rem;
        padding: 0.75rem 1.5rem;
    }
`

export const DeleteButton = styled.button`
    background-color: var(--red);

    &:hover {
        background-color: var(--red-hover);
    }

    &:focus {
        background-color: var(--red-hover);
        outline: 0;
        box-shadow: 0 0 0 1px var(--white), 0 0 0 3px var(--red);
    }
`

// not authorised
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