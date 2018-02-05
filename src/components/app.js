import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import DynamicPage from './dynamic-page';
import NoMatch from './no-match';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dynamic' component={DynamicPage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
