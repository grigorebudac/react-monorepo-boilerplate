import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import configureStore from 'store/configure-store';
import history from 'navigation/history';

const store = configureStore();

const ApplicationContainer: React.FC = props => {
  return (
    <Provider store={store}>
      <Router history={history}>{props.children}</Router>
    </Provider>
  );
};

export { ApplicationContainer };
