/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
// import placeImage from "./src/assets/adidas.png";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

type Props = {};
export default class App extends Component<Props> {
  state = {
    places: [],
    selectedPlace: null
  };

  onPressAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri:
              "https://nangokuman.com/wp-content/uploads/2018/11/cropped-nangokuman-logo-small-1-1.png"
          }
        })
      };
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  placeDeleteHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalCloseHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <PlaceDetail
            selectedPlace={this.state.selectedPlace}
            onItemDeleted={this.placeDeleteHandler}
            onModalClosed={this.modalCloseHandler}
          />
          <PlaceInput onPlaceAdded={this.onPressAddedHandler} />
          <PlaceList
            places={this.state.places}
            // onItemDeleted={this.placeDeleteHandler}
            onItemSelected={this.placeSelectedHandler}
          />
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
