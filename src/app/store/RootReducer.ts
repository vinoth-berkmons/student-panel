import { combineReducers } from "redux";
import authSlice from "./auth/authSlice";
import coursesSlice from "./coursesSlice/coursesSlice";
import createCourseSlice from "./coursesSlice/createCourseSlice";
import studentDetailSlice from "./studentSlice/studentDetailSlice";
import studentSlice from "./studentSlice/studentSlice";

/**
 * All the  reducers placed in store
 */

/**
 * Root reducer holds all the reducer of the app
 */
export const rootReducer = combineReducers({
  auth: authSlice,
  students: studentSlice,
  student: studentDetailSlice,
  courses: coursesSlice,
  createCourse: createCourseSlice
});

export type RootState = ReturnType<typeof rootReducer>;
