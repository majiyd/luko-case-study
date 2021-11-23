import React from 'react'
import {Text, TextStyle, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';

type Props = {
  type?: 'headline' | 'sub-body' | 'body' | 'caption';
  children: React.ReactNode;
  style?: TextStyle
};
const BaseText = ({children, type="sub-body", style}: Props) => {
  if (type === 'headline') {
    return <Text style={[styles.headline, style]}>{children}</Text>
  
  }
  return (
      <Text style={[styles.subBody, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  headline: {
    fontSize: 19,
    fontWeight: 'bold',
    lineHeight: 26,
    color: Colors.light.gray1000
  },
  subBody: {
    fontSize: 15,
    lineHeight: 20,
    color: Colors.light.gray700
  }
})
export default BaseText
