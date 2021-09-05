/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ProductVariationStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: "2%",
    width: "90%",
    alignSelf: "center",
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
});

export const NewVariationstyles = StyleSheet.create({});

export default ProductVariationStyles;
