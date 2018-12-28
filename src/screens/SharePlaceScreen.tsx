import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import FormList from "../components/FormList";
import { addPlace } from "../store/actions";
import { RootState } from "../store/reducers";

interface DispatchProps {
  addPlace: (name: string) => void;
}

type Props = DispatchProps;

const SharePlaceScreen: React.FunctionComponent<Props> = ({ addPlace }) => (
  <View style={styles.flex}>
    <FormList onSubmit={addPlace} />
  </View>
);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addPlace: (name: string) => dispatch(addPlace(name))
});

export default connect<null, DispatchProps, {}, RootState>(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
