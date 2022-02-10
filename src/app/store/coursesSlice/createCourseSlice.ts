import { createSelector, createSlice } from "@reduxjs/toolkit";

import { CreateCourseState } from "../../common/models/Courses";
import * as CONSTANTS from "../appConstants";
import { RootState } from "../RootReducer";
import * as thunks from "./thunks";
import { doCreateCourse } from "./thunks";

/**
 * Initial State
 */
const initialState = {
  course: {},
  status: CONSTANTS.STORE_STATUS.INIT,
  error: null,
  loading: false,
} as CreateCourseState;

/**
 * Create Courses Slice
 * extra reducer handles the Api response to set to the state
 */
const createCourseSlice = createSlice({
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
      .addCase(doCreateCourse.pending, (state: CreateCourseState) => {
        state.loading = true;
        state.course = null;
        state.status = CONSTANTS.STORE_STATUS.BUSY;
      })
      .addCase(doCreateCourse.rejected, (state: CreateCourseState) => {
        state.status = CONSTANTS.STORE_STATUS.ERROR;
        state.loading = false;
      })
      .addCase(
        doCreateCourse.fulfilled,
        (state: CreateCourseState, action: any) => {
          console.log(action.payload);
          state.course = action.payload;
          state.status = CONSTANTS.STORE_STATUS.IDLE;
          state.loading = false;
        }
      );
  },
});

/**
 * Actions
 */
const { resetError, setError } = createCourseSlice.actions;

/**
 * Courses Selectors
 */
const createCourseState = (state: RootState) => state.createCourse;
const storeStatus = createSelector(createCourseState, (state) => state.status);
const storeError = createSelector(createCourseState, (state) => state.error);
const fetchCreatedCourses = createSelector(
  createCourseState,
  (state) => state.course
);
const loading = createSelector(createCourseState, (state) => state.loading);

/**
 * Exports
 */
export default createCourseSlice.reducer;

export const createCourseActions = {
  ...thunks,
  resetError,
  setError,
};

export const selectCreateCourses = {
  storeStatus,
  storeError,
  loading,
  fetchCreatedCourses,
};
