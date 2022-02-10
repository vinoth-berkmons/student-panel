import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../../common/models/Auth";

import { LOGIN } from "../constants";

const API = process.env.REACT_APP_API_URL;

/**
 * Do fetch Api to fetch list of courses
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
