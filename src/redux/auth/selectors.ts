import { createSelector, Selector } from "reselect";

import { StateAll } from "../types";

import { AuthState } from "./models";
import { initAuthState } from "./data";

export const rootSelector: Selector<StateAll, AuthState> = (state: StateAll) =>
  state.auth || initAuthState;

export const getAuthEntryContext = () =>
  createSelector([rootSelector], (state: AuthState) => {
    return state.authEntryContext || initAuthState.authEntryContext;
  });

export const getLoginResponse = () =>
  createSelector([rootSelector], (state: AuthState) => {
    return state.loginResponse || initAuthState.loginResponse;
  });

export const getRegisterResponse = () =>
  createSelector([rootSelector], (state: AuthState) => {
    return state.registerResponse || initAuthState.registerResponse;
  });

export const getForgotResponse = () =>
  createSelector(rootSelector, (state: AuthState) => {
    return state.forgotResponse || initAuthState.forgotResponse;
  });

export const getMyAddressResponse = () =>
  createSelector(rootSelector, (state: AuthState) => {
    return (
      state.myAddressResponse.response ||
      initAuthState.myAddressResponse.response
    );
  });

export const getNewAddressResponse = () =>
  createSelector(rootSelector, (state: AuthState) => {
    return (
      state.newAddressResponse.response ||
      initAuthState.newAddressResponse.response
    );
  });

const selectors = {
  getAuthEntryContext,
  getLoginResponse,
  getForgotResponse,
  getMyAddressResponse,
  getNewAddressResponse,
  getRegisterResponse,
};

export default selectors;
