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
                <Route 
                    exact
                    path='/productRequests/new'
                    render={() => (<div>Add new request</div>)}
                />
                <Route
                    exact
                    path='/productRequests/:id'
                    render={() => (<div>Request Details</div>)}
                />
                <Redirect to='/' />
            </Switch>
            
        </BrowserRouter>
    )
}

export default App;