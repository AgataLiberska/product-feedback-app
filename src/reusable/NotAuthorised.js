import React from 'react';
import LostImg from '../assets/shared/undraw_Lost.svg';

import { NotAuthorisedCard, NotAuthorisedImgWrapper, NotAuthorisedImg, NotAuthorisedHeading } from './reusableStyles';

const NotAuthorised = () => {
    return (
        <NotAuthorisedCard>
            <NotAuthorisedImgWrapper>
                <NotAuthorisedImg src={LostImg} alt=""/>
            </NotAuthorisedImgWrapper>

            <NotAuthorisedHeading>Sorry, you're not authorised to do this.</NotAuthorisedHeading>
        </NotAuthorisedCard>
    )
}

export default NotAuthorised;