/**
 * AccountSettingsIcons
 * @format
 *
 */
import React from "react";
import { TextStyle, StyleProp } from "react-native";

import Coins from "./coins.svg";
import Followers from "./followers.svg";
import Twitter from "./twitter.svg";
import Fb from "./fb.svg";
import Instagram from "./instagram.svg";
import IllustrationAddress from "./illustration_address.svg";
<<<<<<< HEAD
import AddressPointer from "./address_pointer.svg";
import Edit from "./edit.svg";
import Arrow from "./back_arrow.svg";
=======
>>>>>>> 21ec335... fix(rebasing): rebasing

const AccountSettingsIcons = (
  name: string,
  extraStyle: StyleProp<TextStyle>,
  width: number,
  height: number
) => {
  const icons: { [key: string]: JSX.Element } = {
    fb: <Fb style={extraStyle} height={height} width={width} />,
    coins: <Coins style={extraStyle} height={height} width={width} />,
    followers: <Followers style={extraStyle} height={height} width={width} />,
    twitter: <Twitter style={extraStyle} height={height} width={width} />,
    instagram: <Instagram style={extraStyle} height={height} width={width} />,
    illustration_address: (
      <IllustrationAddress style={extraStyle} height={height} width={width} />
    ),
<<<<<<< HEAD
    address_pointer: (
      <AddressPointer style={extraStyle} height={height} width={width} />
    ),
    edit: <Edit style={extraStyle} height={height} width={width} />,
    arrow: <Arrow style={extraStyle} height={height} width={width} />,
=======
>>>>>>> 21ec335... fix(rebasing): rebasing
  };

  return icons[name];
};

export default AccountSettingsIcons;
