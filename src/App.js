import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Details from './pages/Details';
import NewFeedback from './pages/NewFeedback';
import EditFeedback from './pages/EditFeedback';
import RoadMap from './pages/RoadMap';

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
                <Route 
                    exact
                    path='/productRequests/:requestId/edit'
                    component={EditFeedback}    
                />
                <Route 
                    exact
                    path='/roadMap'
                    component={RoadMap}
                />
                <Redirect to='/' />
            </Switch>
            
        </BrowserRouter>
    )
}

export default App;