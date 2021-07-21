import styled from 'styled-components';
import { Link } from 'react-router-dom';

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