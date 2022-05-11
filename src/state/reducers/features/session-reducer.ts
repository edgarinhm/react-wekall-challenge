import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { login, logout } from "../../actions/user-actions";

export interface SessionState {
  authenticated: boolean;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

const initialState: SessionState = {
  authenticated: false,
  user: { id: "", name: "", email: "" },
};

const handleLoginFulfilled = (
  state: SessionState,
  { payload }: PayloadAction<SessionState>
) => {
  state.authenticated = !state.authenticated;
  state.user = { ...payload.user };
};

const handleLoginRejected = (state: SessionState) => {
  state.authenticated = false;
};

const handleLogout = (state: SessionState) => {
  localStorage.clear();
  state.authenticated = initialState.authenticated;
};

export default createReducer(initialState, {
  [login.fulfilled.type]: handleLoginFulfilled,
  [login.rejected.type]: handleLoginRejected,
  [logout.type]: handleLogout,
});
