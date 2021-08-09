import styled from 'styled-components';

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