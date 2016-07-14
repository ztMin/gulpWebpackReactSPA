import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './config/router.js';

let history = createBrowserHistory();
render(<Router history={history} routes={routes}/>, document.getElementById('app'))
/*
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router } from 'react-router'
import routes from './config/routes'

render(<Router history={browserHistory} routes={routes}/>, document.getElementById('example'))

*/
/*
render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="app" component={Dashboard}/>
      <Route path="inbox" component={Inbox}/>
      <Route path="calendar" component={Calendar}/>
      <Route path="*" component={Dashboard}/>
    </Route>
  </Router>
), document.getElementById('app'));
*/