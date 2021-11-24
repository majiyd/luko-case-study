import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import ActionText from '../components/ActionText';
import Colors from '../constants/Colors';
import BaseInput from '../components/forms/BaseInput';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View style={styles.header}>
        <ActionText onPress={() => console.log('cancel')}>Cancel</ActionText>
        <ActionText style={styles.add} isDisabled={true} onPress={() => console.log('cancel')}>Add</ActionText>
      </View>
      <KeyboardAwareScrollView>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Pressable style={styles.noImage}>
              <FontAwesome
                name="camera"
                size={50}
                color={Colors.light.bluko500}
              />
            </Pressable>
          </View>

          <BaseInput label="Name" placeholder="Bracelet" style={styles.input} />
          <BaseInput label="Name" placeholder="Bracelet" type="amount" />
        </View>

      </KeyboardAwareScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.Gray50,
    paddingVertical: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  add: {
    fontWeight: 'bold'
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 25,
    alignItems: 'center'
  },
  imageContainer: {
    width: 150,
    height: 150,
  },
  noImage: {
    flex: 1,
    borderRadius: 75,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: Colors.light.gray100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    marginBottom: 20
  }
});
