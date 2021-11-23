import React from 'react'
import { StyleSheet, Text, Pressable, TextStyle } from 'react-native'
import Colors from '../constants/Colors';

type Props = {
  children: React.ReactNode;
  style?: TextStyle;
  onPress: () => void;
  isDisabled?: boolean;
};
const ActionText = ({children, style, onPress, isDisabled=false}: Props) => {
  return (
    <Pressable hitSlop={15} onPress={!isDisabled ? onPress : () => {}}>
      <Text style={[styles.text, style, {color: isDisabled ? Colors.light.gray300: Colors.light.bluko500}]}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    lineHeight: 24
  }
})
export default ActionText
