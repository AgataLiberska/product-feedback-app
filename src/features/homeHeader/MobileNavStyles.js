import styled from 'styled-components';

export const MobileNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    position: absolute;
    top: 4.5rem;
    right: ${props => props.open ? '0' : '-17rem'};
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    width: 17rem;
    height: 100%;
    padding: 1.5rem;
    background-color: var(--background-color);
    transition: all 0.5s ease-in-out;
`