import React from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import firebase from 'firebase';
import { reactReduxFirebase } from 'react-redux-firebase';
import rootReducer from 'reducers/index';
import Home from 'pages/home';
import DynamicPage from 'pages/dynamic-page';
import NoMatch from 'pages/no-match';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

// react-redux-firebase options
const rrfConfig = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
};

// Global injected by WebPack, from firebase.config.json file
firebase.initializeApp(firebaseConfig);

// Add redux Firebase to compose
const createStoreWithFirebase = compose(reactReduxFirebase(firebase, rrfConfig))(createStore);

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);


const App = () => (
  <Provider store={ store }>
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
  </Provider>

);

export default App;
