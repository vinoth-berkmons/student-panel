import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { FETCH_STUDENTS, FETCH_STUDENT_DETAIL } from "../constants";

const API = process.env.REACT_APP_API_URL;

/**
 * Do fetch Api to fetch list of students
 */
export const doFetchStudents = createAsyncThunk<any>(
  FETCH_STUDENTS,
  async () => {
    try {
      const response = await axios.get(`${API}/students`);
      console.log({ response });
      return response.data.students;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
);

export const doFetchStudentById = createAsyncThunk(
  FETCH_STUDENT_DETAIL,
  async (id: string) => {
    try {
      const response = await axios.get(`${API}/student/:${id}`);
      console.log({ response });
      return response.data.student;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
);
