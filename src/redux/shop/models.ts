import { ResponseState } from "@app/redux/api-models/common";
import { ENUM } from "@app/constants";

import * as shopInfo from "../api-models/shop-info";
import * as shopDelete from "../api-models/shop-delete";
import * as shopAddress from "../api-models/shop-address";
import * as addProduct from "../api-models/add-product";
import * as productList from "../api-models/product-list";

export type ShopInfoResponse = shopInfo.Response;
export type ShopDeleteResponse = shopDelete.Response;
export type ShopAddressResponse = shopAddress.Response;
export type AddProductRequest = addProduct.Request;
export type AddProductResponse = addProduct.Response;
export type ProductListResponse = productList.Response;

export type ProductForm = {
  productImg: null;
  productNm: string;
  description: string;
  price: string;
  weight: string;
  stocks: string;
  shelfLife: string;
  preOrder: boolean;
  measurement: string;
  categoryId: number;
  status: ENUM.Product_Status;
};

export type VariationForm = {
  variationImg: null;
  productNm: string;
  price: string;
  weight: string;
  stocks: string;
};

export type AvailabilityForm = {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
};

export type WholesaleForm = {
  min: string;
  max: string;
  unit: string;
};

export type ShippingDetailsForm = {
  weight: string;
  width: string;
  length: string;
  height: string;
  expressDelivery: boolean;
  karosaDelivery: boolean;
  pickUpBuyer: boolean;
  sellerCourier: boolean;
};

export type ShopSettingsForm = {
  coverPhoto?: string;
  avatarPhoto?: string;
  shopName: string;
  status: ENUM.Shop_Status;
};

export type ShopPaymentForm = {
  cod: boolean;
  gcash: boolean;
  creditCard: boolean;
};

export type ShopEntryContext = {
  shopSettings: ShopSettingsForm;
  shopPayment: ShopPaymentForm;
};

export type ProductEntryContext = {
  productForm: ProductForm;
  variationForm: VariationForm;
  availabilityForm: AvailabilityForm;
  wholesaleForm: WholesaleForm;
  shippingDetailsForm: ShippingDetailsForm;
};

export type ShopState = {
  shopEntryContext: ShopEntryContext;
  productEntryContext: ProductEntryContext;
  shopInfoResponse: ResponseState<ShopInfoResponse>;
  shopDeleteResponse: ResponseState<ShopDeleteResponse>;
  shopAddressResponse: ResponseState<ShopAddressResponse>;
  addProductResponse: ResponseState<AddProductResponse>;
  productListResponse: ResponseState<ProductListResponse>;
};

declare module "../types" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface StateAll {
    shop: ShopState;
  }
}
