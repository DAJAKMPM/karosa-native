import { createSelector, Selector } from "reselect";

import { StateAll } from "../types";

import { ShopState } from "./models";
import { initShopState } from "./data";

export const rootSelector: Selector<StateAll, ShopState> = (state: StateAll) =>
  state.shop || initShopState;

export const getShopStatus = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.shopEntryContext.shopStatus ||
      initShopState.shopEntryContext.shopStatus
    );
  });

export const getProductForm = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.productEntryContext.productForm ||
      initShopState.productEntryContext.productForm
    );
  });

export const getVariationForm = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.productEntryContext.variationForm ||
      initShopState.productEntryContext.variationForm
    );
  });

export const getAvailabilityForm = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.productEntryContext.availabilityForm ||
      initShopState.productEntryContext.availabilityForm
    );
  });

export const getWholesaleForm = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.productEntryContext.wholesaleForm ||
      initShopState.productEntryContext.wholesaleForm
    );
  });

export const getProductStatus = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return (
      state.productEntryContext.productForm.status ||
      initShopState.productEntryContext.productForm.status
    );
  });

export const getShopResponse = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return state.shopResponse || initShopState.shopResponse;
  });

export const getProductResponse = () =>
  createSelector([rootSelector], (state: ShopState) => {
    return state.productResponse || initShopState.productResponse;
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getShopStatus,
  getAvailabilityForm,
  getProductForm,
  getVariationForm,
  getWholesaleForm,
  getProductStatus,
  getShopResponse,
  getProductResponse,
};
