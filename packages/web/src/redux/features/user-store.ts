import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "@project/common";

export interface UserStore {
  userInfo: User;
}

const initialState: UserStore = {
  userInfo: {} as User
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state: UserStore, action: PayloadAction<string>) => {
      state.userInfo.name = action.payload;
    },
    setRole: (state: UserStore, action: PayloadAction<number>) => {
      state.userInfo.role = action.payload;
    },
    setUser: (state: UserStore, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
    }
  }
});

export const { reducer } = slice;
export const { setName, setUser, setRole } = slice.actions;
