import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView
} from "react-native";

import startMainTabs from "../MainTabs/startMainTab";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <Text>Please Login</Text>
          <Button title="Switch to Login" />
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Your E-Mail Address"
              style={styles.input}
            />
            <DefaultInput placeholder="Password" style={styles.input} />
            <DefaultInput placeholder="Confirm Password" style={styles.input} />
          </View>
          <Button title="Login" onPress={this.loginHandler} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#ccc"
  }
});

export default AuthScreen;
