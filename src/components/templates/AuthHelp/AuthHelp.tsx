/**
 *
 * AuthHelp
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import { View, Image } from "react-native";
import { theme } from "@app/styles";
import Text from "@app/atoms/Text";
import IconLabel from "@app/molecules/IconLabel";
import Header from "@app/components/molecules/Header";
import Icon from "@app/atoms/Icon";

import type { PropsType } from "./types";
import { IMAGE_SIZE } from "./config";
import AuthHelpStyles from "./styles";

const AuthHelp: FC<PropsType> = (props: PropsType) => {
  const { onBack } = props;

  const icon = (name: string) => {
    return (
      <Icon group="login" name={name} width={IMAGE_SIZE} height={IMAGE_SIZE} />
    );
  };

  return (
    <Fragment>
      <Header
        leftComponent={{
          icon: "close",
          color: theme.colors.primary,
          onPress: onBack,
        }}
        centerComponent={
          <Text text="Help Centre" customStyle={AuthHelpStyles.txtHeader} />
        }
      />
      <View style={AuthHelpStyles.container}>
        <View style={AuthHelpStyles.logoContainer}>
          <Image
            style={AuthHelpStyles.logo}
            source={require("../../../../assets/logo-red.png")}
          />
        </View>
        <View style={AuthHelpStyles.textContainer}>
          <IconLabel
            title="karosasupport@gmail.com"
            subtitle="Responds within 1-2 days"
            containerStyle={AuthHelpStyles.spacer}
            icon={icon("email")}
          />
          <IconLabel
            title="032 456 3478"
            subtitle="(Monday - Sunday, 9AM - 6PM)"
            icon={icon("phone")}
          />
        </View>
        <Text
          text={"2020 Karosa. All rights reserved."}
          customStyle={AuthHelpStyles.footer}
        />
      </View>
    </Fragment>
  );
};

export default AuthHelp;
