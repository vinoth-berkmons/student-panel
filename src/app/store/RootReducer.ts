import { combineReducers } from "redux";
import studentDetailSlice from "./studentSlice/studentDetailSlice";
import studentSlice from "./studentSlice/studentSlice";

/**
 * All the common reducers placed in store
 * Other reducers are placed in respective directory
 */

/**
 * Root reducer holds all the reducer of the app
 */
export const rootReducer = combineReducers({
  students: studentSlice,
  student: studentDetailSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
