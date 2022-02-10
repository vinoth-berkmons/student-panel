import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CourseOption } from '../../common/models/Courses';
import { RootState } from '../RootReducer';


import { ENROLL_COURSE, FETCH_STUDENT_DETAIL, FETCH_STUDENTS } from './constants';

/**
 * Do fetch Api to fetch list of students
 */
export const doFetchStudents = createAsyncThunk<any>(
  FETCH_STUDENTS,
  async () => {
    try {
      const response = await axios.get(`/students`);
      console.log({ response });
      return response.data.data.students;
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
      const response = await axios.get(`/students/${id}`);
      console.log({ response });
      return response.data.data;
    } catch (e) {
      console.log(e);
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
    const addCourse = data.filter((d) =>
      !student?.courses.find((c) => c.id === d.value)
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
    } catch (e) {
      throw e;
    }
  }
);
