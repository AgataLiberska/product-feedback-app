import React from 'react';
import CategoriesList from '../categories/CategoriesList'

const HomeHeader = () => {
    return (
        <header>
            <div>
                <h1>FrontEndMentor</h1>
                <p>Suggestions Board</p>
            </div>
            <CategoriesList />
        </header>
    )
}

export default HomeHeader;