import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RoadMapExcerptContainer = styled.div`
    background-color: var(--white);
    border-radius: 0.625rem;
    width: 100%;
    padding: 1rem 1.5rem 1.5rem;
`

export const RoadMapExcerptTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
`

export const RoadMapExcerptHeading = styled.h2`
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