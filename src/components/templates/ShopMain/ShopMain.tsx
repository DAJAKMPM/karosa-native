/**
 *
 * ShopMain
 * @format
 *
 */

import React, { FC, ReactElement } from "react";
import {
  RefreshControl,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { listIterator } from "@app/utils";
import { theme } from "@app/styles";
import { COMMON } from "@app/constants";
import type { PropsType as ListChevronType } from "@app/organisms/ListChevron/types";
import Text from "@app/atoms/Text";
import Profile from "@app/organisms/Profile";
import ListChevron from "@app/organisms/ListChevron";

import type { PropsType } from "./types";
import ShopMainStyles from "./styles";

const ShopMainTemplate: FC<PropsType> = (props) => {
  const { refreshing, onRefresh, shopName, isActive, navigation, address } =
    props;

  const action = (onPress: () => void, icon: ReactElement, label: string) => {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={ShopMainStyles.actionSubContainer}>
          {icon}
          <Text text={label} textStyle={ShopMainStyles.actionLabel} />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const icons = {
    ship: (
      <MaterialIcons name="local-shipping" style={ShopMainStyles.commonIcon} />
    ),
    cancel: (
      <MaterialCommunityIcons name="cancel" style={ShopMainStyles.commonIcon} />
    ),
    return: <AntDesign name="inbox" style={ShopMainStyles.inboxIcon} />,
  };

  const myProductsProps: ListChevronType = {
    title: "My Products",
    info: "80 Products",
    listColor: theme.colors.orange5,
    variation: COMMON.VARIATION.ONE,
    hasBottomDivider: true,
    onPress: navigation.onProducts,
  };

  const marketingProps: ListChevronType = {
    title: "Marketing",
    listColor: theme.colors.blue5,
    variation: COMMON.VARIATION.ONE,
    hasBottomDivider: true,
    onPress: navigation.onMarketing,
  };

  const financeProps: ListChevronType = {
    title: "Finance",
    listColor: theme.colors.red5,
    variation: COMMON.VARIATION.ONE,
    hasBottomDivider: true,
    onPress: navigation.onFinance,
  };

  const reportsProps: ListChevronType = {
    title: "Reports",
    listColor: theme.colors.purple,
    variation: COMMON.VARIATION.ONE,
    onPress: navigation.onReports,
  };

  const getActions = () => {
    const elements: ReactElement[] = [];

    const toShip = action(() => navigation.onToShip, icons.ship, "To Ship");
    const returns = action(() => navigation.onReturns, icons.return, "Returns");
    const cancelled = action(
      () => navigation.onCancelled,
      icons.cancel,
      "Cancelled"
    );

    elements.push(toShip, cancelled, returns);

    return (
      <View style={ShopMainStyles.actionPhaseContainer}>
        <View style={ShopMainStyles.actionMainContainer}>
          {listIterator(elements)}
        </View>
      </View>
    );
  };

  const getProfile = () => {
    return (
      <Profile
        variation={COMMON.VARIATION.TWO}
        coverPhoto="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606613/karosa/shop_ynswwn.jpg"
        avatarPhoto="https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png"
        onBack={navigation.onBack}
        onChat={navigation.onChat}
        onSettings={navigation.onSettings}
        shopName={shopName}
        address={address}
        rating="4.8"
        followers="4.3K"
        chatPerf="89%"
        isActive={isActive}
      />
    );
  };

  const getChevron = () => {
    const elements: ReactElement[] = [];

    const myProducts = <ListChevron {...myProductsProps} />;
    const marketing = <ListChevron {...marketingProps} />;
    const finance = <ListChevron {...financeProps} />;
    const reports = <ListChevron {...reportsProps} />;

    elements.push(myProducts, marketing, finance, reports);

    return (
      <>
        <View style={ShopMainStyles.choicesContainer}>
          {listIterator(elements)}
        </View>
        <View style={ShopMainStyles.spacer} />
      </>
    );
  };

  const getContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.colors.primary}
          />
        }
      >
        <>{getProfile()}</>
        <>{getActions()}</>
        <>{getChevron()}</>
      </ScrollView>
    );
  };

  return <>{getContent()}</>;
};

export default ShopMainTemplate;
