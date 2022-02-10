import { createSelector, createSlice } from "@reduxjs/toolkit";

import {
  Course,
  CoursesState,
} from "../../common/models/Courses";
import * as CONSTANTS from "../appConstants";
import { RootState } from "../RootReducer";
import * as thunks from "./thunks";
import { doFetchCourses } from "./thunks";

/**
 * Initial State
 */
const initialState = {
  courses: [],
  status: CONSTANTS.STORE_STATUS.INIT,
  error: null,
  loading: false,
} as CoursesState;

/**
 * Courses Slice
 * extra reducer handles the Api response to set to the state
 */
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    resetError(state, _action) {
      if (state.status === CONSTANTS.STORE_STATUS.ERROR) {
        state.status = CONSTANTS.STORE_STATUS.IDLE;
      }
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(doFetchCourses.pending, (state: CoursesState) => {
        state.loading = true;
        state.courses = [];
        state.status = CONSTANTS.STORE_STATUS.BUSY;
      })
      .addCase(doFetchCourses.rejected, (state: CoursesState) => {
        state.status = CONSTANTS.STORE_STATUS.ERROR;
        state.loading = false;
      })
      .addCase(doFetchCourses.fulfilled, (state: CoursesState, action: any) => {
        console.log(action.payload);
        state.courses = action.payload.map((c: Course) => ({
          value: c.id,
          label: c.name,
        }));
        state.status = CONSTANTS.STORE_STATUS.IDLE;
        state.loading = false;
      });
  },
});

/**
 * Actions
 */
const { resetError, setError } = coursesSlice.actions;

/**
 * Courses Selectors
 */
const coursesState = (state: RootState) => state.courses;
const storeStatus = createSelector(coursesState, (state) => state.status);
const storeError = createSelector(coursesState, (state) => state.error);
const fetchedCourses = createSelector(coursesState, (state) => state.courses);
const loading = createSelector(coursesState, (state) => state.loading);

/**
 * Exports
 */
export default coursesSlice.reducer;

export const coursesActions = {
  ...thunks,
  resetError,
  setError,
};

export const selectCourses = {
  storeStatus,
  storeError,
  loading,
  fetchedCourses,
};
