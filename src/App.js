import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import HomeHeader from './features/homeHeader/HomeHeader';
import SuggestionsList from './features/suggestions/SuggestionsList';

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route 
                    exact 
                    path='/'
                    render={() => (
                        <>
                            <HomeHeader />
                            <SuggestionsList />
                        </>
                    )}
                />
                <Redirect to='/' />
            </Switch>
            
        </BrowserRouter>
    )
}

export default App;