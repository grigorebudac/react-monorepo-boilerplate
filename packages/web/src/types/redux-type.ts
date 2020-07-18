import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import { UserStore } from 'store';

export type AppThunk = ThunkAction<void, AppState, any, Action<string>>;

export type AppState = {
  user: UserStore.UserStore;
};
