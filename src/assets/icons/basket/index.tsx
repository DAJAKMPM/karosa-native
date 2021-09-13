/**
 * BasketIcons
 * @format
 *
 */
import React from "react";
import { ViewStyle, StyleProp } from "react-native";

import Store from "./store.svg";

const BasketIcons = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
) => {
  const icons: { [key: string]: JSX.Element } = {
    store: <Store style={extraStyle} height={height} width={width} />,
  };

  return icons[name];
};

export default BasketIcons;
