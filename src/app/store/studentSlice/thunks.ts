import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CourseOption } from "../../common/models/Courses";
import { authActions } from "../auth/authSlice";
import { RootState } from "../RootReducer";

import {
  ENROLL_COURSE,
  FETCH_STUDENT_DETAIL,
  FETCH_STUDENTS,
  FETCH_BATCH_STUDENTS,
} from "./constants";

/**
 * Do fetch Api to fetch list of students
 */
export const doFetchStudents = createAsyncThunk<any>(
  FETCH_STUDENTS,
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState;
    if (state.students.students) {
      return;
    }

    try {
      const response = await axios.get(
        `/students?pageSize=${10}&page=${state.students.currentPage}`
      );

      return response.data.data;
    } catch (e: any) {
      const response = e.response;
      if (response.status === 401) {
        dispatch(authActions.setAuthenticationInvalid());
      }

      throw e;
    }
  }
);

/**
 * Batch API to fetch requested page number and page of the student list API
 */
export const doFetchNextBatch = createAsyncThunk(
  FETCH_BATCH_STUDENTS,
  async (next: boolean, { dispatch, getState }) => {
    const state = getState() as RootState;
    let nextPage = state.students.currentPage - 1;
    if (next) {
      nextPage = state.students.currentPage + 1;
    }
    try {
      const response = await axios.get(
        `/students?pageSize=${10}&page=${nextPage}`
      );
      console.log({ response });
      return { ...response.data.data, nextPage };
    } catch (e: any) {
      const response = e.response;
      if (response.status === 401) {
        dispatch(authActions.setAuthenticationInvalid());
      }
      throw e;
    }
  }
);

/**
 * Fetch student by Id
 */
export const doFetchStudentById = createAsyncThunk(
  FETCH_STUDENT_DETAIL,
  async (id: string, { dispatch }) => {
    try {
      const response = await axios.get(`/students/${id}`);
      console.log({ response });
      return response.data.data;
    } catch (e: any) {
      const response = e.response;
      if (response.status === 401) {
        dispatch(authActions.setAuthenticationInvalid());
      }
      throw e;
    }
  }
);

/**
 * Do fetch Api to fetch list of courses
 */
export const doEnrollOrRemoveCourse = createAsyncThunk(
  ENROLL_COURSE,
  async (data: CourseOption[], { dispatch, getState }) => {
    const state = getState() as RootState;
    const student = state.student.student;
    const addCourse = data.filter(
      (d) => !student?.courses.find((c) => c.id === d.value)
    );

    const removeCourse = student?.courses
      .filter((d) => !data.find((c) => c.value === d.id))
      .map((c) => ({ value: c.id, name: c.name }));

    const isAddCourse = addCourse.length > 0;

    console.log({ addCourse, removeCourse, isAddCourse, data, student });
    let course = isAddCourse ? addCourse[0] : removeCourse[0];
    try {
      const response = await axios({
        method: "post",
        url: `/students/${isAddCourse ? "addCourse" : "removeCourse"}`,
        data: {
          studentId: student.id,
          courseId: course.value,
        },
        headers: {
          credential: "include",
        },
      });
      dispatch(doFetchStudentById(student.id));
      return response.data.data;
    } catch (e: any) {
      const response = e.response;
      if (response.status === 401) {
        dispatch(authActions.setAuthenticationInvalid());
      }
      throw e;
    }
  }
);
