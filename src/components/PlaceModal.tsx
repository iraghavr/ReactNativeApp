import React from "react";
import {
  Modal,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

interface Props {
  open: boolean;
  place?: {
    value: string;
    image: {};
  } | null;
  onItemDeleted: () => void;
  onClose: () => void;
}

const PlaceModal: React.FunctionComponent<Props> = ({
  open,
  place,
  onItemDeleted,
  onClose
}) => (
  <Modal visible={open} onRequestClose={onClose} animationType="slide">
    <View style={styles.modalContainer}>
      {place && (
        <>
          <Image source={place.image} style={styles.img} />
          <Text style={styles.heading}>{place.value}</Text>
        </>
      )}
      <View>
        <TouchableOpacity onPress={onItemDeleted}>
          <View style={styles.deleteButton}>
            <Icon name="trash" size={32} color="red" />
          </View>
        </TouchableOpacity>
        <Button title="Close" onPress={onClose} />
      </View>
    </View>
  </Modal>
);

export default PlaceModal;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  img: {
    width: "100%",
    height: 200
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttons: {
    display: "flex"
  },
  deleteButton: {
    alignItems: "center"
  }
});
