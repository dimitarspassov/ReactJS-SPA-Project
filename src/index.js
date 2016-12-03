import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import App from './App';
import HomePage from './components/HomePage';
import Events from './components/Events';
import CreateEvent from './components/CreateEvent';
import Login from './components/Login'
import Register from './components/Register'
import SingleEventPage from './components/SingleEventPage'

render(
    <Router history={ browserHistory }>
        <Route path="/" component={ App } >
            <IndexRoute component={ HomePage } />
            <Route path="/events" component={ Events } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <Route path="/createEvent" component={CreateEvent} />
            <Route path="/details/:id" component={SingleEventPage} />
        </Route>
    </Router>,
    document.getElementById('root')
);