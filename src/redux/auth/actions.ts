import { createAction, createAsyncAction } from "typesafe-actions";

import { ResponseError } from "../api-models/common";
import * as types from "./types";
import {
  LoginRequest,
  RegisterRequest,
  ForgotRequest,
  ForgotResponse,
  MyAddressResponse,
  NewAddressRequest,
  NewAddressResponse,
  LoggedInResponse,
} from "./models";

export const setAuthBack = createAction(
  types.SET_AUTH_BACK,
  (resolve) => (value: boolean) => resolve(value)
);

export const setAuthOpen = createAction(
  types.SET_AUTH_OPEN,
  (resolve) => (value: boolean) => resolve(value)
);

export const callLoginApi = createAsyncAction(
  types.ACT_LOGIN_REQUEST,
  types.ACT_LOGIN_SUCCESS,
  types.ACT_LOGIN_FAILURE
)<LoginRequest, LoggedInResponse, ResponseError>();

export const callRegisterApi = createAsyncAction(
  types.ACT_REGISTER_REQUEST,
  types.ACT_REGISTER_SUCCESS,
  types.ACT_REGISTER_FAILURE
)<RegisterRequest, LoggedInResponse, ResponseError>();

export const callForgotApi = createAsyncAction(
  types.ACT_FORGOT_PASS_REQUEST,
  types.ACT_FORGOT_PASS_SUCCESS,
  types.ACT_FORGOT_PASS_FAILURE
)<ForgotRequest, ForgotResponse, ResponseError>();

export const callMyAddressApi = createAsyncAction(
  types.ACT_MY_ADDRESS_REQUEST,
  types.ACT_MY_ADDRESS_SUCCESS,
  types.ACT_MY_ADDRESS_FAILURE
)<undefined, MyAddressResponse, ResponseError>();

export const callNewAddressApi = createAsyncAction(
  types.ACT_NEW_ADDRESS_REQUEST,
  types.ACT_NEW_ADDRESS_SUCCESS,
  types.ACT_NEW_ADDRESS_FAILURE
)<NewAddressRequest, NewAddressResponse, ResponseError>();

const actions = {
  setAuthBack,
  setAuthOpen,
  callLoginApi,
  callForgotApi,
  callMyAddressApi,
  callNewAddressApi,
  callRegisterApi,
};

export default actions;
