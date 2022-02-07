import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { FETCH_STUDENTS } from "../constants";

const API = "http://studentpanel.mocklab.io/v1";

const doFetchStudents = createAsyncThunk<any>(FETCH_STUDENTS, async () => {
  try {
    const response = await axios.get(`${API}/students`);
    console.log({ response });
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
});

export default doFetchStudents;
