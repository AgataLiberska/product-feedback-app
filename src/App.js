import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './features/pages/Home';

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route 
                    exact 
                    path='/'
                    component={Home}
                />
                <Redirect to='/' />
            </Switch>
            
        </BrowserRouter>
    )
}

export default App;