import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import configureStore from 'store/configure-store';
import history from 'navigation/history';

const store = configureStore();

const ApplicationContainer: React.FC = props => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router history={history}>{props.children}</Router>
      </ConnectedRouter>
    </Provider>
  );
};

export { ApplicationContainer };
