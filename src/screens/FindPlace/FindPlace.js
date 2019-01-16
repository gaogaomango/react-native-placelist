import React, { Component } from "react";
import { View, Text } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";

import PlaceList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed = event => {
    if (event.buttonId === "sideDrawerToggle") {
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: true
          }
        }
      });
    }
  };

  itemSelectedHandler = key => {
    const setPlace = this.props.places.find(place => {
      return place.key == key;
    });
    Navigation.push(this.props.componentId, {
      component: {
        name: "awesome-places.PlaceDetailScreen",
        passProps: {
          selectedPlace: setPlace
        },
        options: {
          topBar: {
            title: {
              text: setPlace.name
            }
          },
          bottomTabs: {
            visible: false
          }
        }
      }
    });
  };

  render() {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);
