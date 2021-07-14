import React from 'react';
import CategoriesList from '../categories/CategoriesList';
import RoadMapExcerpt from '../suggestions/RoadMapExcerpt';

const HomeHeader = () => {
    return (
        <header>
            <div>
                <h1>FrontEndMentor</h1>
                <p>Suggestions Board</p>
            </div>
            <CategoriesList />
            <RoadMapExcerpt />
        </header>
    )
}

export default HomeHeader;