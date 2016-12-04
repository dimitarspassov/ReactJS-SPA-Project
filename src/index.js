import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import App from './App';
import HomePage from './components/HomePage';
import Events from './components/Events';
import CreateEvent from './components/CreateEvent';
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'
import SingleEventPage from './components/SingleEventPage'
import EditPage from './components/Edit/EditPage'
import MyEvents from './components/MyEvents'


render(
    <Router history={ browserHistory }>
        <Route path="/" component={ App } >
            <IndexRoute component={ HomePage } />
            <Route path="/events" component={ Events } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <Route path="/createEvent" component={CreateEvent} />
            <Route path="/myEvents" component={MyEvents} />
            <Route path="/details/:id" component={SingleEventPage} />
            <Route path="/edit/:id" component={EditPage} />
            <Route path="logout" component={Logout}/>
        </Route>
    </Router>,
    document.getElementById('root')
);