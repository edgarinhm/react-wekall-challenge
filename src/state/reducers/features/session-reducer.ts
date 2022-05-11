import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { login, logout } from "../../actions/user-actions";

export interface SessionState {
  authenticated: boolean;
}

const initialState: SessionState = {
  authenticated: false,
};

const handleLoginFulfilled = (
  state: SessionState,
  { payload }: PayloadAction<SessionState>
) => {
  state.authenticated = payload.authenticated;
};

const handleLogout = (state: SessionState) => {
  localStorage.clear();
  state.authenticated = initialState.authenticated;
};

export default createReducer(initialState, {
  [login.fulfilled.type]: handleLoginFulfilled,
  [logout.type]: handleLogout,
});
