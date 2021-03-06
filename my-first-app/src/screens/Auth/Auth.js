import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from  "../../components/UI/HeadingText/HeadingText";
import backgroundImage from '../../assets/beautiful-place.jpg';

class AuthScreen extends Component {

  loginHandler = () => {
    startMainTabs();
  }

  render() {
    return(
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <HeadingText>Please Log In</HeadingText>
          <Button title="Switch to Login" />
          <View style={styles.inputContainer}>
            <DefaultInput style={styles.input} placeholder="Your E-Mail Address"/>
            <DefaultInput style={styles.input} placeholder="Password"/>
            <DefaultInput style={styles.input} placeholder="Confirm Password"/>
          </View>
          <Button title="Submit" onPress={this.loginHandler} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  }
})

export default AuthScreen;
