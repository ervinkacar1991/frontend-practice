import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import memberReducer from "./user/memberSlice";

const rootReducer = combineReducers({
  user: userReducer,
  member: memberReducer,

  // TODO: Add more reducers here if needed
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
