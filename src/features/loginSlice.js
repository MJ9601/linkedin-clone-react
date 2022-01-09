import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    loginPage: (state) => {
      state.login = true;
    },

    registerPage: (state) => {
      state.login = false;
    },
  },
});

export const { loginPage, registerPage } = loginSlice.actions;
export const selectlogin = (state) => state.login;

export default loginSlice.reducer;
