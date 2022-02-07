import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { StudentState } from '../../common/models/Student';
import * as CONSTANTS from '../appConstants';
import { doFetchStudents } from './thunk';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (builder: ActionReducerMapBuilder<StudentState>) {
  builder
    .addCase(doFetchStudents.pending, (state: StudentState, {payload}) => {
      state.loading = true;
      state.studentsList = null;
      state.status = CONSTANTS.STORE_STATUS.BUSY;
    })
    .addCase(doFetchStudents.rejected, (state: StudentState, {payload}) => {
      state.status = CONSTANTS.STORE_STATUS.ERROR;
      state.loading = false;
    })
    .addCase(doFetchStudents.fulfilled, (state: StudentState, { payload }) => {
      console.log({payload})
      state.studentsList = payload;
      state.status = CONSTANTS.STORE_STATUS.IDLE;
      state.loading = false;
    });
}
