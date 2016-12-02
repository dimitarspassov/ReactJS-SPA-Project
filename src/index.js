import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory, Match} from 'react-router';

import App from './App';
import HomePage from './components/HomePage';
import Events from './components/Events';
import CreateEvent from './components/CreateEvent';



const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

render(
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={HomePage} />
            <Route path="/events" component={Events} />
            <Route path="/createEvent" component={CreateEvent} />

        </Route>
    </Router>,
    document.getElementById('root')
);