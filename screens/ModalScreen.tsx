import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import ActionText from '../components/ActionText';
import Colors from '../constants/Colors';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View style={styles.header}>
        <ActionText onPress={()=> console.log('cancel')}>Cancel</ActionText>
        <ActionText style={styles.add} isDisabled={true}>Add</ActionText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.Gray50,
    paddingHorizontal:20,
    paddingVertical: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  add:{
    fontWeight: 'bold'
  }
});
