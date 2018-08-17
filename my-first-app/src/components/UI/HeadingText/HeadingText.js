import React from 'react';
import { Text, StyleSheet, } from 'react-native';

import MainText from '../MainText/MainText';

const headingText = props => (
  <MainText>
    <Text {...props} style={[styles.textHeading, props.style]}>
      {props.children}
    </Text>
  </MainText>
)

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 28,
    fontWeight: "bold"
  }
})

export default headingText;
