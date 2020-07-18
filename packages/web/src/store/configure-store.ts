import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';

import history from 'navigation/history';
import rootReducer from './root-reducer';

const rootStore = () => {
  const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];

  const store = configureStore({
    reducer: rootReducer(),
    middleware: middleware
  });

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./root-reducer', () => {
      const newRootReducer = require('./root-reducer').default;
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
};

export default rootStore;
