import React from 'react';
import { useHistory } from 'react-router-dom';
import { GoBackLink } from './reusableStyles';

const GoBack = ({ target, darkText}) => {
    const history = useHistory();

    const goBackClickHandler = () => {
        history.goBack();
    }

    return (
        <GoBackLink darktext={darkText ? 1: 0} onClick={goBackClickHandler}>
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
            Go Back
        </GoBackLink>
    )
}

export default GoBack;