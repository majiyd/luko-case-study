import React, { useState } from "react";
import { View, TextInput, StyleSheet, ViewStyle } from "react-native";
import Colors from "../../constants/Colors";
import BaseText from "../BaseText";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label: string;
  style?: ViewStyle;
};

const BaseTextArea = ({
  value,
  onChangeText,
  placeholder = "Optional",
  label,
  style,
}: Props) => {
  const [isFocused, setFocused] = useState(false);
  return (
    <View style={[styles.container, style]}>
      <BaseText type="caption">{label}</BaseText>
      <View style={[styles.inputWrapper, isFocused && styles.focused]}>
        <TextInput
          multiline
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={styles.input}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputWrapper: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: Colors.light.background,
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.light.gray100,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 17,
    height: 128,
    color: Colors.light.gray1000,
  },
  focused: {
    borderColor: Colors.light.bluko500,
    shadowColor: Colors.light.blueShadow,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default BaseTextArea;
