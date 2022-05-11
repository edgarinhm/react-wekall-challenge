import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("user/login", async () => {
  try {
  } catch (error) {
    throw Error(error as string);
  }
});

export const logout = createAction<boolean | undefined>("user/logout");
