import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from 'pages/home';
import DynamicPage from 'pages/dynamic-page';
import NoMatch from 'pages/no-match';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/dynamic' component={ DynamicPage } />
        <Route component={ NoMatch } />
      </Switch>
    </div>
  </Router>
);

export default App;
