import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
    from {
        display: none;
        opacity: 0;
        right: -17rem;
    }
    1% {
        display: flex;
        opacity: 0;
        right: -17rem;
    }
    to {
        display: flex;
        opacity: 1;
        right: 0;
    }
`

const slideOut = keyframes`
    from {
        display: flex;
        opacity: 1;
        right: 0;
    }
    99% {
        display: flex;
        opacity: 0;
        right: -17rem;
    }
    to {
        display: none;
        opacity: 0;
        right: -17rem;
    }
`

export const MobileNavContainer = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    position: absolute;
    top: 4.5rem;
    right: -17rem;
    width: 17rem;
    height: calc(100vh - 4.5rem);
    padding: 1.5rem;
    background-color: var(--background-color);
    animation: 0.5s ${props => props.open ? slideIn : slideOut} forwards;
    z-index: 100;
`

//    transition: all 0.5s ease-in-out;
//display: ${props => props.open ? 'flex' : 'none'};