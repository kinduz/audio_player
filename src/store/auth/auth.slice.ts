import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IAuthState {
  token: string;
}

const initialState: IAuthState = {
  token: localStorage.getItem("token") ?? "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
