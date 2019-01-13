import React, { Component } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";

import startMainTabs from "../MainTabs/startMainTab";

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View>
          <Text>Auth Screen</Text>
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
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default AuthScreen;
