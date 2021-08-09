import styled from 'styled-components';
import { Link } from 'react-router-dom';

const setStatusColor = ({status}) => {
    if (status === 'planned') return '#f49f85'
    else if (status === 'in-progress') return '#ad1fea'
    else if (status === 'live') return '#62bcfa'
}

// Individual suggestion cards
export const SuggestionCard = styled.article`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
        "heading heading"
        "text text"
        "category ."
        "upvote comments";
    padding: 1.5rem;
    background-color: var(--white);
    border-radius: 0.625rem;
    overflow: hidden;
`
export const ResizeableSuggestionCard = styled(SuggestionCard)`
    @media screen and (min-width: 500px) {
        grid-template-columns: 2.5rem auto 3rem;
        grid-template-areas: 
            "upvote heading comments"
            "upvote text comments"
            ". category comments";
        gap: 0 2.5rem;
        padding: 1.75rem 2rem;
    }
`

export const StatusCard = styled(SuggestionCard)`
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 0.375rem;
        background-color: ${setStatusColor}
    }   
`

export const CardHeading = styled.h2`
    grid-area: heading;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;

    & a {
        transition: color 0.3s ease;
        color: var(--dark-grey-blue);

        &:hover {
            color: var(--dark-blue);
        }
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 0.25rem;
    }
    
`

export const CardText = styled.p`
    grid-area: text;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: var(--medium-grey);

    @media screen and (min-width: 768px) {
        margin-bottom: 0.75rem;
    }
` 

export const CardCategory = styled.span`
    grid-area: category;
    justify-self: start;

    padding: 0.3125rem 1rem;
    background-color: var(--light-blue);
    border-radius: 0.625rem;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.125rem;
    color: var(--dark-blue);
    text-transform: capitalize;

`

export const UpvoteButton = styled.button`
    grid-area: upvote;
    justify-self: start;
    margin-top: 1rem;
    padding: 0.375rem 0.75rem 0.375rem 1rem;
    background-color: ${props => props.isPressed ? "var(--dark-blue)" : "var(--light-blue)"} ;
    border: 0;
    border-radius: 0.625rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${props => props.isPressed ? "var(--white)" : "var(--dark-grey-blue)"};
    transition: background-color 0.3s ease;
    cursor: pointer;

    & svg {
        display: inline-block;
        margin-right: 0.625rem;        

        & path {
            fill: ${props => props.isPressed ? "var(--white)" : "var(--dark-blue)"};
        }
    }

    &:hover {
        background-color: var(--medium-blue);
    }
`

export const ResizeableUpvoteButton = styled(UpvoteButton)`
    @media screen and (min-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 2.5rem;
        margin-top: unset;
        padding: 0.875rem 0.5rem 0.5rem;

        & svg {
            margin-right: unset;
            margin-bottom: 0.5rem;
        }
    }
`

export const CommentsBtn = styled(Link)`
    grid-area: comments;
    justify-self: end;
    align-self: end;
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.125rem;
    color: var(--dark-grey-blue);

    & img {
        display: inline-block;
        margin-right: 0.5rem;
    }

    @media screen and (min-width: 500px) {
        align-self: center;
    }
`