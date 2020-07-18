import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@project/common';

export type UserStore = {
  userInfo: User.User;
};

const initialState: UserStore = {
  userInfo: {} as User.User
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserStore, action: PayloadAction<User.User>) => {
      state.userInfo = action.payload;
    }
  }
});

export const { reducer } = slice;
export const { setUser } = slice.actions;
