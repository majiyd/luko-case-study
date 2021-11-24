import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Camera } from "expo-camera";

type Props = {
  turnOff: () => void;
  takePicture: (uri: string) => void;
}

const CameraScreen = ({ turnOff, takePicture }: Props) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const cameraRef = useRef(null);

  const snap = async () => {
    //@ts-ignore
    const picture = await cameraRef.current?.takePictureAsync();
    takePicture(picture.uri);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={turnOff} hitSlop={8}>
            <Text style={styles.text}> Cancel </Text>
          </Pressable>
          <Pressable style={styles.snap} onPress={snap}>
            <View style={styles.inner} />
          </Pressable>
          <View style={{ height: 60, width: 40, flex: 1 }} />
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    // flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    marginBottom: 55,
    justifyContent: "space-between",
    width: "100%",
    height: 66,
    alignItems: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  snap: {
    width: 66,
    aspectRatio: 1,
    borderRadius: 33,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  inner: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    borderWidth: 2,
  },
});
export default CameraScreen;
