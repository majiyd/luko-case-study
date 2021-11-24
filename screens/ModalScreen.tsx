import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Platform, StyleSheet, View, Pressable, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

import ActionText from "../components/ActionText";
import Colors from "../constants/Colors";
import BaseInput from "../components/forms/BaseInput";
import BasePicker from "../components/forms/BasePicker";
import { Category, Inventory, IPicker } from "../types";
import BaseTextArea from "../components/forms/BaseTextArea";
import { useNavigation } from "@react-navigation/core";
import CameraScreen from "./Camera";
import api from "../api";

interface ICategory extends IPicker {
  value: Category;
}
const categories: ICategory[] = [
  { title: "Art", value: "ART" },
  { title: "Electronics", value: "ELECTRONICS" },
  { title: "Jewelry", value: "JEWELRY" },
  { title: "Musical Instrument", value: "MUSIC_INSTRUMENT" },
];

export default function ModalScreen() {
  const navigation = useNavigation();

  const [showCamera, setShowCamera] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState<ICategory | undefined>(undefined);
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const takePicture = (url: string) => {
    setImageUrl(url);
    setShowCamera(false);
  };

  const handleValueChange = (text: string) => {
    setValue(text.replace(/,/gi, ""));
  };

  const addInventory = async () => {
    try {
      const data: Inventory = {
        id: new Date().getTime(),
        name,
        purchasePrice: Number(value),
        type: category?.value!,
        description,
        photo: imageUrl,
      };
      await api.post(data);
      navigation.goBack();
    } catch (error) {
      console.log(`error`, error);
    }
  };

  return (
    <>
      {showCamera ? (
        <CameraScreen
          turnOff={() => setShowCamera(false)}
          takePicture={takePicture}
        />
      ) : (
        <View style={styles.container}>
          <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
          <View style={styles.header}>
            <ActionText onPress={() => navigation.goBack()}>Cancel</ActionText>
            <ActionText
              style={styles.add}
              isDisabled={
                !imageUrl || !name || !Number(value) || !category?.value
              }
              onPress={addInventory}
            >
              Add
            </ActionText>
          </View>

          <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.content}>
              <View style={styles.imageContainer}>
                {imageUrl ? (
                  <View style={styles.imageWrapper}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Pressable
                      style={styles.deleteImage}
                      hitSlop={8}
                      onPress={() => setImageUrl("")}
                    >
                      <FontAwesome
                        name="trash"
                        size={15}
                        color={Colors.light.background}
                      />
                    </Pressable>
                  </View>
                ) : (
                  <Pressable
                    style={styles.noImage}
                    onPress={() => setShowCamera(true)}
                  >
                    <FontAwesome
                      name="camera"
                      size={50}
                      color={Colors.light.bluko500}
                    />
                  </Pressable>
                )}
              </View>

              <BaseInput
                label="Name"
                placeholder="Bracelet"
                style={styles.input}
                onChangeText={(text) => setName(text)}
                value={name}
              />
              <BasePicker
                items={categories}
                style={styles.input}
                label="Category"
                placeholder="Select a category..."
                onChangeItem={(data) => setCategory(data as ICategory)}
              />
              <BaseInput
                label="Value"
                placeholder="700"
                type="amount"
                style={styles.input}
                keyboardType="number-pad"
                value={Number(value).toLocaleString()}
                onChangeText={handleValueChange}
              />
              <BaseTextArea
                label="Description"
                onChangeText={(data) => setDescription(data)}
                value={description}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.gray50,
    paddingVertical: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  add: {
    fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 25,
    alignItems: "center",
    flexGrow: 1,
  },
  imageContainer: {
    width: 150,
    height: 150,
  },
  noImage: {
    flex: 1,
    borderRadius: 75,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: Colors.light.gray100,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    flex: 1,
    position: "relative",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 75,
  },
  deleteImage: {
    backgroundColor: Colors.light.terracota,
    width: 32,
    aspectRatio: 1,
    position: "absolute",
    right: 0,
    bottom: 0,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: 20,
  },
});
