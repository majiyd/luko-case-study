import React from "react";
import { Text, TextStyle, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

type Props = {
  type?: "headline" | "sub-body" | "body" | "caption";
  children: React.ReactNode;
  style?: TextStyle;
  numberOfLines?: number;
};
const BaseText = ({
  children,
  type = "sub-body",
  style,
  numberOfLines,
}: Props) => {
  if (type === "headline") {
    return <Text style={[styles.headline, style]}>{children}</Text>;
  }
  if (type === "body") {
    return (
      <Text style={[styles.body, style]} numberOfLines={numberOfLines}>
        {children}
      </Text>
    );
  }
  if (type === "caption") {
    return <Text style={[styles.caption, style]}>{children}</Text>;
  }
  return <Text style={[styles.subBody, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  headline: {
    fontSize: 19,
    fontWeight: "bold",
    lineHeight: 26,
    color: Colors.light.gray1000,
  },
  subBody: {
    fontSize: 15,
    lineHeight: 20,
    color: Colors.light.gray700,
  },
  body: {
    fontSize: 17,
    lineHeight: 24,
    color: Colors.light.gray700,
  },
  caption: {
    fontSize: 13,
    lineHeight: 17,
    color: Colors.light.gray1000,
  },
});
export default BaseText;
