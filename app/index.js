import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'containers/app';

const render = Component =>
  ReactDOM.render(  // eslint-disable-line
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );

render(App);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./containers/app.js', () => render(App));
