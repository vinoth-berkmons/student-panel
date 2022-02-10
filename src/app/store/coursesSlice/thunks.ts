import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Course } from "../../common/models/Courses";
import { CREATE_COURSE, FETCH_COURSES } from "./constants";


/**
 * Do fetch Api to fetch list of courses
 */
export const doFetchCourses = createAsyncThunk<any>(
  FETCH_COURSES,
  async () => {
    try {
      const response = await axios.get(`/courses`);
      console.log({ response });
      return response.data.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
);


/**
 * Do Create Api to Create the courses
 */
 export const doCreateCourse = createAsyncThunk(
  CREATE_COURSE,
  async (course: Course) => {
    try {
      const response = await axios({
        method: "post",
        url: `/courses`,
        data: course,
        headers: {
          credential: "include",
        },
      });
      return response.data.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
);
