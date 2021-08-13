import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

    @media screen and (min-width: 768px) {
        margin: 1.5rem auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem 0.625rem;
    }
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

    @media screen and (min-width: 768px) {
        position: relative;
        transform: translateX(0);
        opacity: 1;
    }
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

export const RoadMapExcerptContainer = styled.div`
    background-color: var(--white);
    border-radius: 0.625rem;
    width: 100%;
    padding: 1rem 1.5rem 1.5rem;
`

export const ExcerptTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
`

export const ExcerptHeading = styled.h2`
    font-size: 1.125rem;
    font-weight: 700;    
    color: var(--dark-grey-blue);
    line-height: 1.625rem;
`

export const LinkToRoadMap = styled(Link)`
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--dark-blue);
    text-decoration: underline;
    line-height: 1.25rem;
    transition: color 0.2s ease;

    &:hover {
        color: var(--medium-blue);
    }

    &:focus {
        outline: 0;
        box-shadow: 0px 0 0 1px var(--white), 0 0 0 3px var(--dark-blue);
    }
`

export const ExcerptCategory = styled.li`
    position: relative;
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    font-size: 1rem;
    color: var(--medium-grey);
    line-height: 1.5rem;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 50%;
    
    }

    &:first-of-type::before {
        background-color: var(--planned-color);
    }

    &:nth-of-type(2)::before {
        background-color: var(--in-progress-color);
    }

    &:last-of-type::before {
        background-color: var(--live-color);
    }
`

export const ExcerptCategoryNumber = styled.span`
    position: absolute;
    right: 0;
    font-weight: 700;
`