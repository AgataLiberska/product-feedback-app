import styled from 'styled-components';

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

