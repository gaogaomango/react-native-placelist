import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangeHandler = event => {
    this.setState({ placeName: event });
  };

  onPressShowPlaceNameHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
    // this.setState({ placeName: "" });
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={placeName => this.placeNameChangeHandler(placeName)}
          value={this.state.placeName}
          placeholder="An awesome place"
          style={styles.placeInput}
        />
        <Button
          onPress={this.onPressShowPlaceNameHandler}
          title="Save"
          color="#841584"
          accessibilityLabel="Show about this Place Name"
          style={styles.placeButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;
