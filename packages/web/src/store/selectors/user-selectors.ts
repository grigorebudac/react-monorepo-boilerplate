import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'types';

const userStoreSelector = (state: AppState) => state.user;

export const userInfo = createSelector([userStoreSelector], state => state.userInfo);
