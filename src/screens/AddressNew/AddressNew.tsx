/**
 *
 * AddressNew
 * @format
 *
 */

import React, { FC, useCallback, useEffect, useState } from "react";

// import AddressNewConfig from "./config";
import type { AddressNewProps, PropsType } from "./types";
// import AddressNewStyles from "./styles";
import { useDispatch } from "react-redux";
import AddressNewTemplate from "@app/components/templates/AddressNewTemplate";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { FormikContext, useFormik } from "formik";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/address";
import { NewAddressForm } from "@app/redux/address/models";
import routes from "@app/navigators/routes";
import { ListInputPropsType } from "@app/components/templates/AddressNewTemplate/types";
import { COMMON } from "@app/constants";

const AddressNew: FC<PropsType> = (props) => {
  const {} = props;
  const { goBack, navigate } = useNavigation();
  const dispatch = useDispatch();

  const inputProps: ListInputPropsType[] = [
    {
      variation: COMMON.VARIATION.FOUR,
      label: "Label",
      name: "label",
      placeholder: "e.g. Home / Office",
    },
    {
      variation: COMMON.VARIATION.FOUR,
      name: "contactName",
      label: "Contact Name",
      placeholder: "Set Name",
    },
    {
      variation: COMMON.VARIATION.FOUR,
      name: "contactNumber",
      label: "Contact Number",
      placeholder: "Set Contact",
      keyboardType: "number-pad",
    },
    {
      variation: COMMON.VARIATION.ONE,
      name: "addressDetails",
      label: "Contact Number",
      placeholder: "e.g. Floor, Unit, Room Number",
      maxLen: 50,
    },
    {
      variation: COMMON.VARIATION.ONE,
      name: "noteRider",
      label: "Note to rider",
      placeholder: "e.g. Landmark, Buidling",
      maxLen: 50,
    },
  ];

  const action = {
    setNewAddressForm: useCallback(
      (values: NewAddressForm) => dispatch(actions.setNewAddress(values)),
      [dispatch]
    ),
  };

  const { params } = useRoute<RouteProp<AddressNewProps, "AddressLocation">>();

  const handleSubmit = (values: NewAddressForm) => {
    action.setNewAddressForm({
      contactName: values.contactName,
      contactNumber: Number(values.contactNumber),
      label: values.label,
      addressDetails: values.addressDetails,
      noteRider: values.noteRider,
      coords: {
        latitude: params.latitude,
        longitude: params.longitude,
      },
    });

    navigate(routes.ACCOUNTS_ADDRESS);
  };
  const newAddressForm = useMemoizedSelector(selectors.getNewAddressForm);

  const formikBag = useFormik({
    initialValues: newAddressForm,
    onSubmit: handleSubmit,
  });

  console.log("VALUES TESTING");
  console.log(newAddressForm);

  return (
    <FormikContext.Provider value={formikBag}>
      <AddressNewTemplate details={params.details} inputProps={inputProps} />
    </FormikContext.Provider>
  );
};

export default AddressNew;
