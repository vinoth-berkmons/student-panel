import { combineReducers } from "redux";
import studentSlice from "./studentSlice";


/**
 * All the common reducers placed in store
 * Other reducers are placed in respective directory
 */

/**
 * Root reducer holds all the reducer of the app
*/
export const rootReducer = combineReducers({
    students: studentSlice
})

export type RootState = ReturnType<typeof rootReducer>

