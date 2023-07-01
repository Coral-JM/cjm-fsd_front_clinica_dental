import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    credentials: {
      token: "",
    },
    data: {
      name: "",
      id: "",
    },
  },
  reducers: {
      login: (state, action) => {
        const { token, name, userId } = action.payload;
        state.credentials.token = token;
        state.data.name = name;
        state.data.user_id = userId;
      },
      logout: (state) => {
        state.credentials.token = "";
        state.data.name = "";
        state.data.user_id = "";
      },
  },
});

export const userData = (state) => state.user;
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;