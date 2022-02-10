import { createSelector, createSlice } from "@reduxjs/toolkit";

import { StudentDetailState } from "../../common/models/Student";
import * as CONSTANTS from "../appConstants";
import { RootState } from "../RootReducer";
import * as thunks from "./thunks";
import { doFetchStudentById } from "./thunks";

/**
 * Initial State
 */
const initialState = {
  student: {},
  status: CONSTANTS.STORE_STATUS.INIT,
  error: null,
  loading: false,
} as StudentDetailState;

/**
 * Student detail Slice
 * extra reducer handles the Api response to set to the state
 */
const studentDetailSlice = createSlice({
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
      .addCase(doFetchStudentById.pending, (state: StudentDetailState) => {
        state.loading = true;
        state.status = CONSTANTS.STORE_STATUS.BUSY;
      })
      .addCase(doFetchStudentById.rejected, (state: StudentDetailState) => {
        state.status = CONSTANTS.STORE_STATUS.ERROR;
        state.loading = false;
      })
      .addCase(
        doFetchStudentById.fulfilled,
        (state: StudentDetailState, action: any) => {
          console.log(action.payload);
          state.student = action.payload;
          state.status = CONSTANTS.STORE_STATUS.IDLE;
          state.loading = false;
        }
      );
  },
});

/**
 * Actions
 */
const { resetError, setError } = studentDetailSlice.actions;

/**
 * Student detail Selectors
 */
const studentState = (state: RootState) => state.student;
const storeStatus = createSelector(studentState, (state) => state.status);
const storeError = createSelector(studentState, (state) => state.error);
const fetchedStudent = createSelector(studentState, (state) => state.student);
const loading = createSelector(studentState, (state) => state.loading);

/**
 * Exports
 */
export default studentDetailSlice.reducer;

export const studentDetailActions = {
  ...thunks,
  resetError,
  setError,
};

export const selectStudentDetail = {
  storeStatus,
  storeError,
  loading,
  fetchedStudent,
};
