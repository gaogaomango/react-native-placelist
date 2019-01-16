import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import DefaultInput from "../UI/DefaultInput/DefaultInput";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangeHandler = event => {
    this.setState({ placeName: event });
  };

  render() {
    return (
      <DefaultInput
        placeholder="Place Name"
        value={this.state.placeName}
        onChangeText={this.placeNameChangeHandler}
      />
    );
  }
}

const styles = StyleSheet.create({});

export default PlaceInput;
