import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`