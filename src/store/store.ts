import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/usersApi";
import usersSlice from "../features/usersSlice/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
