import React from 'react';
import HomeHeader from '../homeHeader/HomeHeader';
import SuggestionsList from '../suggestions/SuggestionsList';
import { HomePageContainer } from './HomePageElements';

const Home = () => {
    return (
        <HomePageContainer>
            <HomeHeader />
            <main>
                <SuggestionsList />
            </main>
        </HomePageContainer>
    )
}

export default Home;