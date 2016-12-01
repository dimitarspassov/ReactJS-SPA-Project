import React from 'react';
import { render } from 'react-dom';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';

import App from './App';
import NotFound from './components/NotFound'

render(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
           
             <Route path="*" component={NotFound}/>
        </Route>
    </Router>,
  document.getElementById('root')
);
