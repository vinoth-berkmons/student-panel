import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { StudentDetailState, StudentState } from "../../common/models/Student";
import * as CONSTANTS from "../appConstants";
import { doFetchStudentById, doFetchStudents } from "./thunk";

/**
 * Extra reducer to handle the response
 * @param builder
 */

// eslint-disable-next-line import/no-anonymous-default-export
export default function (builder: any) {
  builder
    .addCase(doFetchStudents.pending, (state: StudentState) => {
      state.loading = true;
      state.students = null;
      state.status = CONSTANTS.STORE_STATUS.BUSY;
    })
    .addCase(doFetchStudents.rejected, (state: StudentState) => {
      state.status = CONSTANTS.STORE_STATUS.ERROR;
      state.loading = false;
    })
    .addCase(doFetchStudents.fulfilled, (state: StudentState, action: any) => {
      console.log(action.payload);
      state.students = action.payload;
      state.status = CONSTANTS.STORE_STATUS.IDLE;
      state.loading = false;
    })
    .addCase(doFetchStudentById.pending, (state: StudentDetailState) => {
      state.loading = true;
      state.student = null;
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
}
