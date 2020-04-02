import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import configureStore from 'redux/configure-store';
import history from 'routes/history';

const store = configureStore();

interface IProps {
  children: React.ReactNode;
}

function ApplicationContainer({ children }: IProps) {
  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
}

export default ApplicationContainer;
