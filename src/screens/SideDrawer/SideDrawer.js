import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SideDrawer extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <TouchableOpacity>
            <View style={styles.drawerItem}>
              <Icon
                style={styles.drawerItemIcon}
                name={Platform.OS === "android" ? "md-log-out" : "ios-log-out"}
                size={30}
                color="#aaa"
              />
              <Text>Sign Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    paddingTop: 10
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    backgroundColor: "#eee"
  },
  drawerItemIcon: {
    marginRight: 10
  }
});

export default SideDrawer;
