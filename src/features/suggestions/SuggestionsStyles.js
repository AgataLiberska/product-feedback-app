import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EmptyImage from '../../assets/suggestions/illustration-empty.svg';

const setStatusColor = ({status}) => {
    if (status === 'planned') return '#f49f85'
    else if (status === 'in-progress') return '#ad1fea'
    else if (status === 'live') return '#62bcfa'
}


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
        margin-bottom: 1.5rem;
        padding: 0.875rem 0.75rem 0.875rem 1.5rem;
        border-radius: 0.625rem;
    }
`

export const SuggestionHeadingSortWrapper = styled.div`
    display: flex;
    align-items: center;
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

export const SuggestionSortContainer = styled.div`
    display: flex;
    align-items:center;
    
`

export const SortLabel = styled.label`
    padding-right: 0.25rem;
    font-size: 0.75rem;
    color: var(--white);
    white-space: nowrap;
`

export const SortSelect = styled.select` 
    padding: 0.25rem;
    background-color: var(--dark-grey);
    border: 0;
    font-size: 0.75rem;
    font-weight: bold;
    color: var(--white);
`

// The list container

export const SuggestionsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 0 1.5rem;

    @media screen and (min-width: 768px) {
        padding: unset;
    }
`

export const FormPageWrapper = styled.div`
    max-width: 33.75rem;
    margin: auto;
    padding: 2rem 1.5rem 5rem;
    
`

export const FormContainer = styled.main`
    margin-top: 3.5rem;
    padding: 2.75rem 1.5rem 1.5rem;
    background-color: var(--white);
    border-radius: 0.625rem;
`

export const FormHeading = styled.h1`
    margin-bottom: 1.5rem;
    color: var(--dark-grey-blue);
    font-size: 1.125rem;
    line-height: 1.625rem;
`


export const FormControl = styled.div`
    margin-bottom: 1.5rem;

    &:last-of-type {
        margin-bottom: 2.5rem;
    }

`

export const FormInput = styled.input`
    border: ${props => (props.showError ? '1px solid #D73737' : '1px solid var(--background-color)')};

    &:focus {
        border: ${props => (props.showError ? '1px solid var(--red)' : '1px solid var(--dark-blue)')}
    }
`


export const FormLabel = styled.label`
    display: block;
    margin-bottom: 1rem;
    font-size: 0.8125rem;
    color: var(--dark-grey);
    line-height: 1.125rem;

    @media screen and (min-width: 500px) {
        font-size: 0.875rem;
    }
`

export const FormLabelHeading = styled.span`
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 700;
    line-height: 1.125rem;
    color: var(--dark-grey-blue);

`

export const FeedbackFormTextArea = styled.textarea`
    border: ${props => (props.showError ? '1px solid #D73737' : '1px solid var(--background-color)')};}
    height: 7.5rem;

    &:focus {
        border: ${props => (props.showError ? '1px solid var(--red)' : '1px solid var(--dark-blue)')}
    }
`

export const FormError = styled.p`
    margin-top: 0.25rem;
    font-size: 0.8125rem;
    color: var(--red);

    @media screen and (min-width: 500px) {
        font-size: 0.875rem;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 500px) {
        flex-direction: row-reverse;
        justify-content: flex-end;
    }
`

export const DeleteButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 500px) {
        flex-direction: row;
        width: 100%;
    }
`

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
    grid-template-areas: 
        "status status"
        "heading heading"
        "text text"
        "category ."
        "upvote comments";

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 0.375rem;
        background-color: ${setStatusColor}
    }   

    @media screen and (min-width: 768px) {
        padding: 1.5rem 1.25rem;
    }

    @media screen and (min-width: 1024px) {
        padding: 2rem 2rem;
    }
`

export const SuggestionStatus = styled.p`
    position: relative;
    grid-area: status;
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    font-size: 0.8125rem;
    line-height: 1.125rem;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        height: 0.5rem;
        width: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        background-color: ${setStatusColor};

    }

    @media screen and (min-width: 1024px) {
        margin-bottom: 0.5rem;
        font-size: 1rem;
        line-height: 1.5rem; 
    }
`

export const CardHeading = styled.h2`
    grid-area: heading;
    margin-bottom: 0.5rem;
    font-size: 0.8125rem;
    line-height: 1.25rem;
    color: var(--dark-grey-blue);

    & a {
        transition: color 0.3s ease;
        color: var(--dark-grey-blue);

        &:hover {
            color: var(--dark-blue);
        }

        &:focus {
            outline: 0;
            color: var(--dark-blue);
            text-decoration: underline;
        }
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 0.25rem;
    }

    @media screen and (min-width: 1024px) {
        font-size: 1.125rem;
        line-height: 1.625rem;
    }
    
`

export const CardText = styled.p`
    grid-area: text;
    margin-bottom: 0.5rem;
    font-size: 0.8125rem;
    line-height: 1.125rem;
    color: var(--medium-grey);

    @media screen and (min-width: 768px) {
        margin-bottom: 0.75rem;
    }

    @media screen and (min-width: 1024px) {
        margin-bottom: 1rem;
        font-size: 1rem;
        line-height: 1.5rem;
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

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 1px white, 0 0 0 3px var(--dark-blue);
    }

    @media screen and (min-width: 1024px) {
        padding: 0.625rem 0.75rem 0.625rem 1rem;
    }
`

export const ResizeableUpvoteButton = styled(UpvoteButton)`
    @media screen and (min-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: start;
        width: 2.5rem;
        margin-top: unset;
        padding: 0.875rem 0.5rem 0.5rem;

        & svg {
            margin-right: unset;
            margin-bottom: 0.5rem;
        }
    }
`

export const Comments = styled.div`
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

export const NoSuggestionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4.75rem 1.5rem;
    background-color: var(--white);
    border-radius: 0.625rem;
    text-align: center;

    @media screen and (min-width: 768px) {
        padding: 6.875rem 1.5rem;
    }
`

export const NoSuggestionsImage = styled.div`
    width: 100%;
    height: 34vw;
    max-height: 8.5rem;
    margin-bottom: 2.5rem;
    background-image: url(${EmptyImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;

    @media screen and (min-width: 768px) {
        margin-bottom: 3.375rem;
    }
`

export const NoSuggestionsHeading = styled.h2`
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--dark-grey-blue);
    line-height: 1.625rem;

    @media screen and (min-width: 768px) {
        font-size: 1.5rem;
    } 
`

export const NoSuggestionsText = styled.p`
    max-width: 26rem;
    margin: 0 auto 1.5rem;
    font-size: 1rem;
    color: var(--medium-grey);
    line-height: 1.125rem;

    @media screen and (min-width: 768px) {
        margin-bottom: 3rem;
    }
`

export const AddFeedbackBtn = styled(Link)`

    display: block;
    background-color: var(--primary-btn);
    padding: 0.625rem 1rem;
    border-radius: 0.625rem;
    font-size: 0.75rem;
    font-weight: bold;
    color: var(--white);
    line-height: 1.125rem;

    &:hover {
        background-color: var(--primary-btn-hover);
    }

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 1px var(--dark-grey-blue), 0 0 0 3px var(--primary-btn-hover);
    }
`