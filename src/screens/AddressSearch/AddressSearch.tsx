/**
 *
 * AddressSearch
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { GOOGLE_PLACES_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { actions, selectors } from "@app/redux/address";
import { RouteProp, useRoute } from "@react-navigation/native";
import { GeocoderRequest } from "@app/redux/address/models";
import { useMemoizedSelector, useMount } from "@app/hooks";
import AddressSearchTemplate from "@app/templates/AddressSearch";

import type { AddressMainParams } from "./types";

const AddressSearch: FC = () => {
  const { params } =
    useRoute<RouteProp<AddressMainParams, "AddressLocation">>();

  const dispatch = useDispatch();

  const getGeocoderResponse = useMemoizedSelector(
    selectors.getGeocoderResponse
  ).response;

  const callGeocoderApi = useCallback(
    (values: GeocoderRequest) =>
      dispatch(actions.callGeocoderApi.request(values)),
    [dispatch]
  );

  useMount(() => {
    const queryParams: GeocoderRequest = {
      latlng: `${params.latitude},${params.location}`,
      key: GOOGLE_PLACES_API_KEY,
    };

    callGeocoderApi({ ...queryParams });
  });

  return (
    <AddressSearchTemplate
      routeParams={params}
      handleGeocoder={callGeocoderApi}
      formattedAddress={getGeocoderResponse.results[0]?.formatted_address}
    />
  );
};

export default AddressSearch;
