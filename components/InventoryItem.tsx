import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../constants/Colors";
import { Inventory } from "../types";
import BaseText from "./BaseText";

type Props = {
  details: Inventory;
};
const InventoryItem = ({ details }: Props) => {
  const { name, purchasePrice, photo } = details;
  return (
    <View style={styles.item} testID={name}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: photo }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <BaseText type="headline">{name}</BaseText>
        <BaseText style={styles.price}>
          €{purchasePrice.toLocaleString()}
        </BaseText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: 158,
    minHeight: 265,
    backgroundColor: Colors.light.background,
    marginBottom: 20,
    borderRadius: 14,

    shadowColor: Colors.light.shadow,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  content: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flex: 1,
  },
  price: {
    marginTop: 5,
  },
});
export default InventoryItem;
