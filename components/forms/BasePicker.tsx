import React, { useState } from "react";
import {
  View,
  ViewStyle,
  StyleSheet,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { IPicker } from "../../types";
import BaseText from "../BaseText";

type Props = {
  style?: ViewStyle;
  placeholder: string;
  label: string;
  items: IPicker[];
  onChangeItem: (value: IPicker) => void;
};

const BasePicker = ({
  style,
  placeholder,
  items = [],
  onChangeItem,
  label,
}: Props) => {
  const [selected, setSelected] = useState<IPicker>({ title: "", value: "" });
  const [visible, setVisible] = useState(false);

  const handleSelect = (value: IPicker) => {
    setSelected(value);
    onChangeItem(value);
    setVisible(false);
  };

  return (
    <>
      <View style={[styles.container, style]}>
        <BaseText type="caption">{label}</BaseText>
        <Pressable style={styles.wrapper} onPress={() => setVisible(true)}>
          <BaseText type="body" style={styles.text} numberOfLines={1}>
            {selected.title || placeholder}
          </BaseText>
          <View style={styles.chevron}>
            <FontAwesome
              name="chevron-down"
              size={10}
              color={Colors.light.gray300}
            />
          </View>
        </Pressable>
      </View>
      {visible ? (
        <Modal transparent visible={visible} animationType="slide">
          <Pressable style={styles.absolute} onPress={() => setVisible(false)}>
            <Pressable style={styles.pickerItems}>
              <BaseText type="body" style={styles.title} numberOfLines={1}>
                Select {label}
              </BaseText>
              <ScrollView>
                {items.map((item) => (
                  <Pressable
                    key={item.title}
                    style={styles.item}
                    onPress={() => handleSelect(item)}
                  >
                    <BaseText>{item.title}</BaseText>
                    {selected.title === item.title ? (
                      <FontAwesome
                        name="check"
                        size={15}
                        color={Colors.light.bluko500}
                      />
                    ) : null}
                  </Pressable>
                ))}
              </ScrollView>
            </Pressable>
          </Pressable>
        </Modal>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  wrapper: {
    paddingVertical: 12,
    paddingLeft: 15,
    backgroundColor: Colors.light.background,
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.light.gray100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: Colors.light.gray1000,
    flexShrink: 1,
  },
  chevron: {
    paddingHorizontal: 20,
  },
  absolute: {
    backgroundColor: "#0005",
    flex: 1,
    justifyContent: "flex-end",
  },
  pickerItems: {
    height: "60%",
    width: "100%",
    backgroundColor: Colors.light.background,
    alignSelf: "flex-end",
    paddingBottom: 15,
  },
  title: {
    paddingVertical: 15,
    color: Colors.light.gray1000,
    textAlign: "center",
    fontSize: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: Colors.light.gray50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default BasePicker;
