import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

class SideDrawer extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View>
          <Text>SideDrawer</Text>
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

export default SideDrawer;
