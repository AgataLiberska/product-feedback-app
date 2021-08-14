import styled from 'styled-components';

export const MobileNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    position: fixed;
    top: 4.5rem;
    right: ${props => props.open ? '0' : '-17rem' };
    width: 17rem;
    height: calc(100vh - 4.5rem);
    padding: 1.5rem;
    background-color: var(--background-color);
    transition: right 0.5s ease;
    z-index: 100;
`