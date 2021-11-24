import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  KeyboardTypeOptions,
} from "react-native";
import Colors from "../../constants/Colors";
import BaseText from "../BaseText";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  type?: "amount";
  placeholder: string;
  label: string;
  style?: ViewStyle;
  keyboardType?: KeyboardTypeOptions;
};

const BaseInput = ({
  value,
  onChangeText,
  type,
  placeholder,
  label,
  style,
  keyboardType,
}: Props) => {
  const [isFocused, setFocused] = useState(false);
  return (
    <View style={[styles.container, style]}>
      <BaseText type="caption">{label}</BaseText>
      <View style={[styles.inputWrapper, isFocused && styles.focused]}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={styles.input}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          keyboardType={keyboardType}
        />
        {type === "amount" && <BaseText style={styles.currency}>€</BaseText>}
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
    height: 24,
    color: Colors.light.gray1000,
  },
  currency: {
    width: 12,
    marginLeft: 10,
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
export default BaseInput;
