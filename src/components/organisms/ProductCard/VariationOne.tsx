/**
 *
 * VariantOne
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import Text from "@app/atoms/Text";
import Image from "@app/atoms/Image";
import Card from "@app/molecules/Card";

import type { PropsType } from "./types";
import ProductCardStyles from "./styles";
import Ribbon from "@app/atoms/Ribbon";
import Button from "@app/atoms/Button";

const VariantOne: FC<PropsType> = (props) => {
  const {
    name,
    image,
    buttonTitle,
    onButtonClick,
    sold,
    currentPrice,
    discount,
  } = props;

  return (
    <Card wrapperStyle={ProductCardStyles.mainContainer}>
      <View style={ProductCardStyles.wholesaleContainer}>
        <Text customStyle={ProductCardStyles.txtWholesale} text={"Wholesale"} />
      </View>

      {discount && (
        <View style={ProductCardStyles.ribbonContainer}>
          <Ribbon upperText={discount} lowerText="OFF" />
        </View>
      )}

      <Image
        source={{ uri: image }}
        customStyle={ProductCardStyles.image}
        resizeMode={"cover"}
      />
      <View style={ProductCardStyles.bottomContentContainer}>
        <Text
          customStyle={ProductCardStyles.txtName}
          numberOfLines={2}
          text={name}
        />
        <View style={ProductCardStyles.rowContainer}>
          <Text
            customStyle={ProductCardStyles.txtPrice}
            text={`P${currentPrice}`}
          />
          <View style={ProductCardStyles.floatRight}>
            <Text
              customStyle={ProductCardStyles.txtSold}
              text={`${sold} sold`}
            />
          </View>
        </View>
      </View>
      <View style={ProductCardStyles.buttonContainer}>
        <Button
          type="outline"
          title={buttonTitle!}
          customStyle={ProductCardStyles.buttonContent}
          titleStyle={ProductCardStyles.txtButton}
          onPress={onButtonClick!}
        />
      </View>
    </Card>
  );
};

export default VariantOne;
