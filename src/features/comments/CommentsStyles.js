import styled from 'styled-components';


//CommentsList.js
export const CommentsListContainer = styled.div`
    padding: 1.5rem;
    background-color: var(--white);
    border-radius: 0.625rem;

    & li {
        padding: 1.5rem 0;

        &:last-child {
            padding-bottom: 0;
        }

        &:not(:last-child) {
            border-bottom: 1px solid var(--background-color);
        }
    }

    @media screen and (min-width: 768px) {
        padding: 1.5rem 2rem 2rem;

        & li {
            padding: 2rem 0;
        }
    }
`

export const CommentsCount = styled.p`
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--dark-grey-blue);
`


// single comment

export const CommentContainer = styled.li`
    font-size: 0.8125rem;
    line-height: 1.125rem;

    @media screen and (min-width: 768px) {
        font-size: 0.875rem;
        line-height: 1.25rem;
    }
`

export const AuthorInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;


`

export const AuthorImage = styled.img`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    margin-right: 1rem;

    @media screen and (min-width: 768px) {
        margin-right: 2rem;
    }
`

export const AuthorDetails = styled.div`
    flex-grow: 1;
`

export const AuthorName = styled.p`
    font-weight: 700;
    color: var(--dark-grey-blue);

`

export const AuthorUsername = styled.p`
    color: var(--medium-grey);
`

export const ReplyButton = styled.button`
    background-color: transparent;
    border: none;
    color: var(--dark-blue);
    font-weight: 700;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    &:focus {
        text-decoration: underline;
        outline: 0;
        box-shadow: 0 0 0 2px var(--dark-blue);
    }
`

export const CommentText = styled.p`
    color: var(--medium-grey);

    @media screen and (min-width: 768px) {
        padding-left: 4.5rem;
        font-size: 0.9375rem;
        line-height: 1.375rem;
    }
`

export const ReplyContainer = styled.div`
    padding: 1.5rem 0 0 1.5rem;

    @media screen and (min-width: 768px) {
        padding: 2rem 0 0 2.75rem;
    }
`

export const ReplyingToUser = styled.span`
    font-weight: 700;
    color: var(--primary-btn);
`

export const ReplyFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 1rem;
    gap: 0.75rem;

    @media screen and (min-width: 500px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
    }

    @media screen and (min-width: 768px) {
        padding-left: ${props => props.indented ? '4.5rem' : '7.25rem'};
    }
`

//Add new comment styles

export const FormWrapper = styled.section`
    padding: 1.5rem;
    background-color: var(--white);
    border-radius: 0.625rem;

    @media screen and (min-width: 768px) {
        padding: 1.5rem 2rem 2rem;
    }
`

export const FormHeading = styled.h2`
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
    line-height: 1.625rem;
    color: var(--dark-grey-blue);
`
export const FormContainer = styled.form`
    display:flex;
    flex-direction: column;
    gap: 1rem;
`
export const BottomFormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CharactersLeft = styled.div`
    font-size: 0.875rem;
    color: var(--dark-grey);
    line-height: 1.25rem;

    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }
`