import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import logInReducer from "../features/loginSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: logInReducer,
  },
});
