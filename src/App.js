import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Details from './pages/Details';
import NewFeedback from './pages/NewFeedback';

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
                <Route 
                    exact
                    path='/productRequests/new'
                    component={NewFeedback}
                />
                <Route
                    exact
                    path='/productRequests/:requestId'
                    component={Details}
                />
                <Redirect to='/' />
            </Switch>
            
        </BrowserRouter>
    )
}

export default App;