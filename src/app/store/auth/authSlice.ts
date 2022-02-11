import { createSelector, createSlice } from "@reduxjs/toolkit";

import * as CONSTANTS from "../appConstants";
import { AuthState } from "../../common/models/Auth";
import { RootState } from "../RootReducer";

import * as thunks from "./thunks";
import { doLogin, doLogout, setAuthenticationInvalid } from "./thunks";

/**
 * Initial State
 */
const initialState = {
  isAuthenticated: true,
  admin: {},
  status: CONSTANTS.STORE_STATUS.INIT,
  error: null,
  loading: false,
} as AuthState;

/**
 * Auth Slice
 * extra reducer handles the Api response to set to the state
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
        state.isAuthenticated = false;
        state.status = "BUSY";
      })
      .addCase(doLogin.rejected, (state: AuthState) => {
        state.status = "ERROR";
        state.isAuthenticated = false;
        state.loading = false;
      })
      .addCase(doLogin.fulfilled, (state: AuthState, action: any) => {
        state.admin = action.payload;
        state.isAuthenticated = true;
        state.status = "IDLE";
        state.loading = false;
      })
      .addCase(doLogout.fulfilled, (state: AuthState, _action: any) => {
        state.isAuthenticated = false;
        state.loading = false;
      })
      .addCase(setAuthenticationInvalid.fulfilled, (state: AuthState, _action: any) => {
        state.isAuthenticated = false;
        state.loading = false;
      })
      ;
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
