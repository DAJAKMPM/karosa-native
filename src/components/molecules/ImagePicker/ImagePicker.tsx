/**
 *
 * ImagePicker
 * @format
 *
 */

import React, { FC, useEffect } from "react";
import { Alert, Platform, View, TouchableWithoutFeedback } from "react-native";
import * as RnImagePicker from "expo-image-picker";

import type { PropsType } from "./types";
import { ASPECT_RATIO, QUALITY } from "./config";
import VariationOne from "./VariationOne";
import VariationTwo from "./VariationTwo";
import VariationThree from "./VariationThree";

const ImagePicker: FC<PropsType> = (props) => {
  const { variation, uri, onChange } = props;

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await RnImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== "granted") {
          Alert.alert(
            "Unauthorized Permission",
            "Sorry, we need camera roll permissions to make this work!"
          );
        }
      }
    })();
  }, []);

  const handlePress = () => {
    if (!uri) {
      selectImage();
    } else
      Alert.alert(
        "Change Image",
        "Are you sure you want to change this image?",
        [{ text: "Yes", onPress: selectImage }, { text: "No" }]
      );
  };

  const selectImage = async () => {
    try {
      const result = await RnImagePicker.launchImageLibraryAsync({
        mediaTypes: RnImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: ASPECT_RATIO,
        quality: QUALITY,
      });

      if (!result.cancelled) onChange(result.uri);
    } catch (error) {
      Alert.alert("Error reading an image", error as string);
    }
  };

  switch (variation) {
    case 1:
      return (
        <TouchableWithoutFeedback onPress={handlePress}>
          <View>
            <VariationOne uri={uri} />
          </View>
        </TouchableWithoutFeedback>
      );
    case 2:
      return (
        <TouchableWithoutFeedback onPress={handlePress}>
          <View>
            <VariationTwo uri={uri} />
          </View>
        </TouchableWithoutFeedback>
      );
    case 3:
      return (
        <TouchableWithoutFeedback onPress={handlePress}>
          <View>
            <VariationThree uri={uri} />
          </View>
        </TouchableWithoutFeedback>
      );
    default:
      return (
        <TouchableWithoutFeedback onPress={handlePress}>
          <View>
            <VariationOne uri={uri} />
          </View>
        </TouchableWithoutFeedback>
      );
  }
};

export default ImagePicker;
