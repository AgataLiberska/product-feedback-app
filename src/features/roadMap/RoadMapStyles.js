import styled from 'styled-components';

export const RoadMapTabsContainer = styled.header`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid #e5e9f3;
`

export const RoadMapTab = styled.button`
    padding-top: 1.25rem;
    padding-bottom: 1rem;
    background-color: transparent;
    border-radius: 0;
    border-bottom: 4px solid;
    border-bottom-color: ${props => props.isSelected ? props.color : 'transparent'};
    color: var(--dark-grey-blue);
    opacity: ${props => props.isSelected ? '1' : '0.4'};
`

export const RoadMapItemsWrapper = styled.div`
    margin: 1.5rem;
    height: 100%;
    min-height: 100vh;
    position: relative;
`

export const RoadMapStatusGroup = styled.section`
    position: absolute;
    height: 100%;
    left: 0;
    right: 0;
    background-color: var(--background-color);
    transform: ${props => props.selected ? 'translateX(0)' : 'translateX(-100vw)'};
    opacity: ${props => props.selected ? '1' : '0'};
    transition: transform 0.5s ease, opacity 0.5s ease;
`

export const GroupHeading = styled.h2`
    margin-bottom: 0.25rem;
    font-size: 1.125rem;
    line-height. 1.625rem;
    color: var(--dark-grey-blue);
`

export const GroupTagline = styled.p`
    margin-bottom: 1.5rem;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: var(--medium-grey);
`

export const GroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`