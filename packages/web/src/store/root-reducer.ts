import { combineReducers } from 'redux';

import * as UserStore from './store/user-store';

const rootReducer = () => {
  return combineReducers({
    user: UserStore.reducer
  });
};

export default rootReducer;
