import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import { connect } from "react-redux";
import { deletePlace } from "../../store/actions/index";

class placeDetail extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    Navigation.pop(this.props.componentId);
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            resizeMode="contain"
            source={this.props.selectedPlace.image}
            style={styles.placeImage}
          />
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={this.placeDeletedHandler}>
              <View style={styles.deleteButton}>
                <Icon size={30} name="ios-trash" color="red" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  buttonContainer: {
    marginTop: 50
  },
  buttonWrapper: {
    marginBottom: 5
  },
  deleteButton: {
    alignItems: "center"
  }
});

const mapDispatchToPros = dispatch => {
  return {
    onDeletePlace: key => {
      dispatch(deletePlace(key));
    }
  };
};

export default connect(
  null,
  mapDispatchToPros
)(placeDetail);
