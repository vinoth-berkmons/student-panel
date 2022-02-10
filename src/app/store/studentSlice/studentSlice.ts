import { createSelector, createSlice } from "@reduxjs/toolkit";

import { StudentState } from "../../common/models/Student";
import * as CONSTANTS from "../appConstants";
import { RootState } from "../RootReducer";
import * as thunks from "./thunks";
import { doFetchStudents } from "./thunks";

/**
 * Initial State
 */
const initialState = {
  students: [],
  status: CONSTANTS.STORE_STATUS.INIT,
  error: null,
  loading: false,
} as StudentState;

/**
 * Student Slice
 */
const studentSlice = createSlice({
  name: "student",
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
      .addCase(doFetchStudents.pending, (state: StudentState) => {
        state.loading = true;
        state.students = null;
        state.status = CONSTANTS.STORE_STATUS.BUSY;
      })
      .addCase(doFetchStudents.rejected, (state: StudentState, action: any) => {
        console.log(action.payload);
        state.status = CONSTANTS.STORE_STATUS.ERROR;
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(
        doFetchStudents.fulfilled,
        (state: StudentState, action: any) => {
          console.log(action.payload);
          state.students = action.payload;
          state.status = CONSTANTS.STORE_STATUS.IDLE;
          state.loading = false;
        }
      );
  },
});

/**
 * Actions
 */
const { resetError, setError } = studentSlice.actions;

/**
 * Student Selectors
 */
const studentState = (state: RootState) => state.students;
const storeStatus = createSelector(studentState, (state) => state.status);
const storeError = createSelector(studentState, (state) => state.error);
const fetchedStudents = createSelector(studentState, (state) => state.students);
const loading = createSelector(studentState, (state) => state.loading);

/**
 * Exports
 */
export default studentSlice.reducer;

export const studentActions = {
  ...thunks,
  resetError,
  setError,
};

export const selectStudents = {
  storeStatus,
  storeError,
  loading,
  fetchedStudents,
};
