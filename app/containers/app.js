import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';


import Home from 'pages/home';
import DynamicPage from 'pages/dynamic-page';
import NoMatch from 'pages/no-match';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/dynamic' component={ DynamicPage } />
          <Route component={ NoMatch } />
        </Switch>
      </div>
    </Router>
  </MuiThemeProvider>

);

export default App;
