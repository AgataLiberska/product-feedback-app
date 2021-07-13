import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SuggestionsList from './features/suggestions/SuggestionsList';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route 
                    exact 
                    path='/'
                    render={() => (
                        <>
                            <header>
                                <h1>FrontEndMentor</h1>
                                <p>Suggestions Board</p>
                            </header>
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