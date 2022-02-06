import { combineReducers } from "redux";


/**
 * All the common reducers placed in store->common
 * Other reducers are placed in respective directory
 */

/**
 * Root reducer holds all the reducer of the app
*/
export const rootReducer = combineReducers({
})

export type RootState = ReturnType<typeof rootReducer>

