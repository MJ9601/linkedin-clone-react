import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    LOGOUT: (state) => {
      state.user = null;
    },

    LOGIN: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { LOGOUT, LOGIN } = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
