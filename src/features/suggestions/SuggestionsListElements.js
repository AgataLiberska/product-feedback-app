import styled from 'styled-components';
import { Link } from 'react-router-dom';



// Home page list

export const SuggestionsListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
    background-color: var(--dark-grey);

    @media screen and (min-width: 375px) {
        padding: 0.5rem 1.5rem;
    }

    @media screen and (min-width: 768px) {
        justify-content: flex-start;
        margin-bottom: 1.5rem;
        padding: 0.875rem 0.75rem 0.875rem 1.5rem;
        border-radius: 0.625rem;
        
    }
`

export const SuggestionsHeading = styled.h1`
    display: none;

    & img {
        padding-right: 1rem;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        padding-right: 2.25rem;
        font-size: 1.125rem;
        font-weight: 700;
        color: var(--white);
    }

`

export const SortLabel = styled.label`
    padding-right: 0.25rem;
    font-size: 0.75rem;
    color: var(--white);
`

export const SortSelect = styled.select`
    background-color: var(--dark-grey);
    border: 0;
    font-size: 0.75rem;
    font-weight: bold;
    color: var(--white);
`

export const AddFeedbackBtn = styled(Link)`
    margin-right: 0;
    margin-left: auto;
    display: inline-block;
    background-color: var(--primary-btn);
    padding: 0.625rem 1rem;
    border-radius: 0.625rem;
    font-size: 0.75rem;
    font-weight: bold;
    color: var(--white);
    line-height: 1.125rem;
`

// The list container

export const SuggestionsListContainer = styled.div`
    padding: 0 1.5rem;

    @media screen and (min-width: 768px) {
        padding: unset;
    }
`

// Individual suggestion cards
export const SuggestionCard = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
        "heading heading"
        "text text"
        "category ."
        "upvote comments";
    padding: 1.5rem;
    margin-bottom: 1rem;
    background-color: var(--white);
    border-radius: 0.625rem;

    @media screen and (min-width: 768px) {
        grid-template-columns: 2.5rem auto 3rem;
        grid-template-areas: 
            "upvote heading comments"
            "upvote text comments"
            ". category comments";
        gap: 0 2.5rem;
        padding: 1.75rem 2rem;
    }
`
export const CardHeading = styled.h2`
    grid-area: heading;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;

    & a {
        color: var(--dark-grey-blue);
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
    margin-bottom: 1rem;
    padding: 0.3125rem 1rem;
    background-color: var(--light-blue);
    border-radius: 0.625rem;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.125rem;
    color: var(--dark-blue);
    text-transform: capitalize;

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }
`

export const UpvoteButton = styled.button`
    grid-area: upvote;
    justify-self: start;
    padding: 0.375rem 0.75rem 0.375rem 1rem;
    background-color: var(--light-blue);
    border: 0;
    border-radius: 0.625rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--dark-grey-blue);

    & svg {
        display: inline-block;
        margin-right: 0.625rem;        

        & path {
            fill: var(--dark-blue);
        }
    }
    
    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 2.5rem;
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
`