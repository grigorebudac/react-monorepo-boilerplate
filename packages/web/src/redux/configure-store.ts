import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import rootReducer from "./root-reducer";

const rootStore = () => {
  const middleware = [...getDefaultMiddleware()];

  const store = configureStore({
    reducer: rootReducer(),
    middleware: middleware
  });

  return store;
};

export default rootStore;
