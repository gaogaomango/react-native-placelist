import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const placeDetail = props => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image
          resizeMode="contain"
          source={props.selectedPlace.image}
          style={styles.placeImage}
        />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button title="Delete" color="red" onPress={props.onItemDeleted} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="Close" onPress={props.onModalClosed} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
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
  }
});

export default placeDetail;
