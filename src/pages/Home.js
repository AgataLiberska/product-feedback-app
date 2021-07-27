import React from 'react';
import HomeHeader from '../features/homeHeader/HomeHeader';
import SuggestionsList from '../features/suggestions/SuggestionsList';
import { HomePageContainer } from './HomePageStyles';

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