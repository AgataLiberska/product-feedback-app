import React from 'react';
import { GoBackLink } from './reusableStyles';

const GoBack = ({target, darkText}) => {
    return (
        <GoBackLink to={target} darktext={darkText ? 1: 0}>
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
            Go Back
        </GoBackLink>
    )
}

export default GoBack;