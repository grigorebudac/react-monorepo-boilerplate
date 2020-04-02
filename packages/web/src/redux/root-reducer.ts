import { combineReducers } from "redux";

import * as UserStore from "./features/user-store";

const rootReducer = () => {
  return combineReducers({
    user: UserStore.reducer
  });
};

export default rootReducer;
