import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/user-service";
import { User } from "../../interfaces/user-interface";
import { formStatus } from "./form-actions";

export const login = createAsyncThunk(
  "user/login",
  async (user: User, { dispatch }) => {
    try {
      const data = await UserService.login(user);
      if (!data.length) {
        dispatch(formStatus("user not found"));
        throw Error();
      } else {
        return { user: { ...data[0], password: "" } };
      }
    } catch (error) {
      throw Error(error as string);
    }
  }
);

export const signup = createAsyncThunk(
  "user/signup",
  async (user: User, { dispatch }) => {
    try {
      const data = await UserService.signup(user);
      if (!data) {
        dispatch(formStatus("user not created"));
        throw Error();
      } else {
        return { ...data, password: "" };
      }
    } catch (error) {
      throw Error(error as string);
    }
  }
);

export const logout = createAction<boolean | undefined>("user/logout");
