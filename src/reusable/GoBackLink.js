import React from 'react';
import { GoBackLink } from './reusableStyles';

import BackArrow from '../assets/shared/icon-arrow-left.svg';

const GoBack = () => {
    return (
        <GoBackLink to='/'>
            <img src={BackArrow} alt='' />
            Go Back
        </GoBackLink>
    )
}

export default GoBack;