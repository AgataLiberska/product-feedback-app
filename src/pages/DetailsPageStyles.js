import styled from 'styled-components';

import {Link} from 'react-router-dom';

export const DetailsPageWrapper = styled.div`
    margin: 1.5rem 1.5rem 5.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media screen and (min-width: 768px) {
        max-width: 45.5rem;
        margin: 3.5rem auto 7.5rem;
    }


`

export const DetailsMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const EditFeedbackBtn = styled(Link)`
    padding: 0.625rem 1rem;
    border: 0;
    border-radius: 0.625rem;
    background-color: var(--dark-blue);
    font-size: 0.8125rem;
    font-weight: 700;
    color: var(--white);

    @media screen and (min-width: 768px) {
        padding: 0.75rem 1.5rem
        font-size: 0.875rem;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: var(--dark-blue-hover);
        }
    }
`