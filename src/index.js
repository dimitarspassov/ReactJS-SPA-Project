import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory, Match} from 'react-router';

import App from './App';
import HomePage from './components/HomePage';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

render(
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={HomePage} />
            <Route path="/about" component={About} />
        </Route>
    </Router>,
    document.getElementById('root')
);