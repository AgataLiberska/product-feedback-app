import React from 'react';
import CategoriesList from '../categories/CategoriesList';
import RoadMapExcerpt from '../roadMap/RoadMapExcerpt';

import { MobileNavContainer } from './MobileNavElements';

const MobileNav = ({isOpen}) => {
    return (
        <MobileNavContainer open={isOpen}>
            <CategoriesList />
            <RoadMapExcerpt />
        </MobileNavContainer> 
    )
}

export default MobileNav;