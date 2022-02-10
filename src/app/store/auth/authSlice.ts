import { createSelector, createSlice } from "@reduxjs/toolkit";

import * as CONSTANTS from "../appConstants";
import { AuthState } from "../../common/models/Auth";
import { RootState } from "../RootReducer";

import * as thunks from "./thunk";
import { doLogin } from "./thunk";

/**
 * Initial State
 */
const initialState = {
  isAuthenticated: false,
  admin: {},
  status: CONSTANTS.STORE_STATUS.INIT,
  error: null,
  loading: false,
} as AuthState;

/**
 * Auth Slice
 */
const authSlice = createSlice({
  name: "auth",
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
      .addCase(doLogin.pending, (state: AuthState) => {
        state.loading = true;
        state.admin = null;
        state.status = "BUSY";
      })
      .addCase(doLogin.rejected, (state: AuthState) => {
        state.status = "ERROR";
        state.loading = false;
      })
      .addCase(doLogin.fulfilled, (state: AuthState, action: any) => {
        console.log(action.payload);
        state.admin = action.payload;
        state.isAuthenticated = true;
        state.status = "IDLE";
        state.loading = false;
      });
  },
});

/**
 * Actions
 */
const { resetError, setError } = authSlice.actions;

/**
 * Auth Selectors
 */
const authState = (state: RootState) => state.auth;
const storeStatus = createSelector(authState, (state) => state.status);
const storeError = createSelector(authState, (state) => state.error);
const isAuthenticated = createSelector(
  authState,
  (state) => state.isAuthenticated
);
const fetchedUser = createSelector(authState, (state) => state.admin);
const loading = createSelector(authState, (state) => state.loading);

/**
 * Exports
 */
export default authSlice.reducer;

export const authActions = {
  ...thunks,
  resetError,
  setError,
};

export const selectAuth = {
  storeStatus,
  storeError,
  isAuthenticated,
  loading,
  fetchedUser,
};