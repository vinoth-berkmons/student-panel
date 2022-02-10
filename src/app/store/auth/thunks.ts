import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { User } from "../../common/models/Auth";
import { INVALID, LOGIN, LOGOUT } from "./constants";

/**
 * All the Auth related API call placed it in this file
 */
export const doLogin = createAsyncThunk(LOGIN, async (credential: {}) => {
  console.log(credential);
  const { userName, password } = credential as User;
  try {
    const response = await axios({
      method: "post",
      url: `/login`,
      data: {
        userName,
        password,
      },
      headers: {
        credential: "include",
      },
    });

    console.log({ response });
    return response.data.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
});

/**
 * Logout the App
 * This removes the cookie
 */

export const doLogout = createAsyncThunk(
  LOGOUT,
  async (_, { dispatch, getState }) => {
    try {
      const response = await axios({
        method: "post",
        url: `/logout`,
        headers: {
          credential: "include",
        },
      });

      console.log({ response });
      return response.data.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
);

/**
 * Set Authentication invalid in local
 */
export const setAuthenticationInvalid = createAsyncThunk(INVALID, async () => {
  return false;
});
