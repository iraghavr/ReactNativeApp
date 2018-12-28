import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Place } from "../store/reducers/places";
import { deletePlace } from "../store/actions";
import { RootState } from "../store/reducers";

interface OwnProps {
  place: Place;
}

interface DispatchProps {
  deletePlace: (key: string) => void;
}

type Props = OwnProps & DispatchProps;

const PlaceDetailScreen: React.FunctionComponent<Props> = ({
  place,
  deletePlace
}) => (
  <View style={styles.container}>
    <Image source={place.image} style={styles.img} />
    <Text style={styles.heading}>{place.value}</Text>
    <View>
      <TouchableOpacity onPress={() => deletePlace(place.key)}>
        <View style={styles.deleteButton}>
          <Icon name="md-trash" size={32} color="red" />
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
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

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  deletePlace: (key: string) => dispatch(deletePlace(key))
});

export default connect<null, DispatchProps, OwnProps, RootState>(
  null,
  mapDispatchToProps
)(PlaceDetailScreen);
