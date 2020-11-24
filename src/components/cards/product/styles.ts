import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  wholesaleContainer: {
    backgroundColor: theme.colors.primary,
    height: 18,
    width: 66,
    position: "absolute",
    zIndex: 1,
    top: 3,
    right: 93,
  },
  discount: {
    position: "absolute",
    right: 0,
    zIndex: 1,
  },
  discountContainer: {
    width: 30,
    height: 37,
    backgroundColor: theme.colors.orange10,
    zIndex: 1,
  },
  txtWholesale: {
    ...theme.textLight,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    marginTop: 2,
  },
  txtDiscount: {
    ...theme.textLight,
    fontWeight: "700",
    color: theme.colors.white,
    textAlign: "center",
    marginTop: 2,
  },
  space: {
    marginTop: 1,
    marginBottom: 1,
  },
  triangleLeft: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: theme.colors.orange10,
    transform: [{ rotate: "90deg" }],
    position: "absolute",
    top: 24,
  },
  triangleRight: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: theme.colors.orange10,
    transform: [{ rotate: "-90deg" }],
    position: "absolute",
    top: 24,
    right: 0,
  },
  image: { width: "100%", height: 140 },
  txtContainerOne: {
    padding: 7,
  },
  txtContainerTwo: {
    flexDirection: "row",
  },
  txtName: {
    ...theme.textRegular,
    fontWeight: "400",
    fontStyle: "normal",
  },
  txtPrice: {
    ...theme.textRegular,
    marginTop: 7,
    marginRight: "auto",
    fontWeight: "500",
    fontStyle: "normal",
  },
  txtSold: {
    ...theme.textLight,
    marginTop: 11,
    marginLeft: "auto",
    fontWeight: "300",
    fontStyle: "normal",
  },
});
