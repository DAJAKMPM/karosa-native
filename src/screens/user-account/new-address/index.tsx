import React, { useState, useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { FormikContext, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Props as HeaderProps } from "@app/components/base-screen/types";
import { Screen } from "@app/components/base-screen";
import { useMemoizedSelector } from "@app/hooks";
import { Props as ButtonProps } from "@app/components/button/types";
import { actions } from "@app/redux/auth";
import {
  actions as regionActions,
  actions as provinceActions,
  actions as citiesActions,
  actions as barangayActions,
  selectors as locationSelector,
} from "@app/redux/location";
import { ListInput } from "@app/components/list/list-input";
import { SelectionData } from "components/formik/form-picker/types";
import { SubmitButton } from "@app/components/formik/submit-button";
import { NewAddressRequest } from "@app/redux/auth/models";
import { ListPicker } from "@app/components/list/list-picker";
import { ListCheckBox } from "@app/components/list/list-checkbox";
import { ScrollView } from "react-native-gesture-handler";

import { styles } from "./styles";
import { validationSchema } from "./validation";

const NewAddressScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const dispatch = useDispatch();

  const callNewAddressApi = useCallback(
    (request: NewAddressRequest) =>
      dispatch(actions.callNewAddressApi.request(request)),
    [dispatch]
  );

  const getRegionResponse = useCallback(
    () => dispatch(regionActions.callRegionApi.request()),
    [dispatch]
  );

  const getProvinceResponse = useCallback(
    () => dispatch(provinceActions.callProvinceApi.request()),
    [dispatch]
  );

  const getCitiesResponse = useCallback(
    () => dispatch(citiesActions.callCitiesApi.request()),
    [dispatch]
  );

  const getBarangayResponse = useCallback(
    () => dispatch(barangayActions.callBarangayApi.request()),
    [dispatch]
  );

  useEffect(() => {
    getRegionResponse(),
      getProvinceResponse(),
      getCitiesResponse(),
      getBarangayResponse();
  }, []);

  const formikBag = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      region: "",
      province: "",
      barangay: 0,
      detailedAddress: "",
      defaultAddress: false,
    },

    onSubmit: (values) => {
      console.log(values);
      const request: NewAddressRequest = {
        name: values.fullName,
        phoneNo: values.phoneNumber,
        detailed_address: values.detailedAddress + values.region + values.province,
        isDefaultAddress: values.defaultAddress,
        barangayId: values.barangay,
      };
      callNewAddressApi(request);
    },
    validationSchema,
  });

  const regionResponse = useMemoizedSelector(
    locationSelector.getRegionResponse
  );

  const provinceResponse = useMemoizedSelector(
    locationSelector.getProvinceResponse
  );

  const citiesResponse = useMemoizedSelector(
    locationSelector.getCitiesResponse
  );

  const barangayResponse = useMemoizedSelector(
    locationSelector.getBarangayResponse
  );

  const regionProp = () => {
    const regionData: SelectionData[] = [];
    regionResponse.map((data) => {
      regionData.push({ id: data.id, value: data.name });
    });
    return regionData;
  };

  const barangayProp = () => {
    const barangayData: SelectionData[] = [];
    barangayResponse.map((data) => {
      barangayData.push({ id: data.id, value: data.name });
    });
    return barangayData;
  };

  const citiesProp = () => {
    const citiesData: SelectionData[] = [];
    citiesResponse.map((data) => {
      citiesData.push({ id: data.id, value: data.name });
    });
    return citiesData;
  };

  const provinceProp = () => {
    const provinceData: SelectionData[] = [];
    provinceResponse.map((data) => {
      provinceData.push({ id: data.id, value: data.name });
    });
    return provinceData;
  };

  const headerProps: HeaderProps = {
    header: {
      iconName: "arrow-back",
      title: "New Address",
      press: {
        left: () => goBack(),
      },
    },
  };

  const SubmitButtonProps: ButtonProps = {
    title: "Submit",
    containerStyle: styles.btnSubmtContainer,
    textStyle: styles.txtBtnSubmit,
  };

  const listInput = (
    name: string,
    orientation: string,
    label: string,
    placeholder: string
  ) => {
    return (
      <ListInput
        isColumn={orientation === "column" ? true : false}
        isRow={orientation === "row" ? true : false}
        hasBottomDivider
        maxLength={name === "fullname" ? 100 : 1000}
        required={false}
        name={name}
        label={label}
        placeholder={placeholder}
      />
    );
  };

  const listCheckBox = (name: string, label: string) => {
    return <ListCheckBox name={name} label={label} />;
  };

  const listInputPicker = (
    name: string,
    label: string,
    placeholder: string,
    data: SelectionData[]
  ): JSX.Element => {
    return (
      <>
        {data && (
          <ListPicker
            name={name}
            label={label}
            placeholder={placeholder}
            data={data}
            returnType={name === "barangay" ? "number" : "string"}
          />
        )}
      </>
    );
  };

  const listIterator = (listItems: React.ReactElement[]) => {
    return listItems.map((item, key) => (
      <React.Fragment key={key}>{item}</React.Fragment>
    ));
  };

  const listDisplay = () => {
    const elements: React.ReactElement[] = [];

    const fullName = listInput("fullName", "row", "Full Name", "Set Full Name");
    const phoneNumber = listInput(
      "phoneNumber",
      "row",
      "Phone Number",
      "Set Phone Number"
    );

    const region = listInputPicker(
      "region",
      "Region",
      "Choose Region",
      regionProp()
    );

    const province = listInputPicker(
      "province",
      "Province",
      "Choose Province",
      provinceProp()
    );

    const cities = listInputPicker(
      "cities",
      "City",
      "Choose City",
      citiesProp()
    );

    const barangay = listInputPicker(
      "barangay",
      "Barangay",
      "Choose Barangay",
      barangayProp()
    );

    const detailedAddress = listInput(
      "detailedAddress",
      "column",
      "Set Detailed Address",
      "Unit Number, House Number, Building, Street Name"
    );

    const defaultAddress = listCheckBox(
      "defaultAddress",
      "Set as default address"
    );

    elements.push(
      fullName,
      phoneNumber,
      region,
      province,
      cities,
      barangay,
      detailedAddress,
      defaultAddress
    );

    return listIterator(elements);
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen {...headerProps}>
        <View style={styles.addressContainer}>
          <ScrollView>
            <React.Fragment>{listDisplay()}</React.Fragment>
            <View style={styles.submitbuttonParent}>
              <SubmitButton {...SubmitButtonProps} />
            </View>
          </ScrollView>
        </View>
      </Screen>
    </FormikContext.Provider>
  );
};
export default NewAddressScreen;
