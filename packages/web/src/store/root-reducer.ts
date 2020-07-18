import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import * as UserStore from './store/user-store';

import history from 'navigation/history';

const rootReducer = () => {
  return combineReducers({
    user: UserStore.reducer,
    router: connectRouter(history)
  });
};

export default rootReducer;
