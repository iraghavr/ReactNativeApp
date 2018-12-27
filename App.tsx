/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import FormList from "./src/components/FormList";
import ListItems from "./src/components/ListItems";
import PlaceModal from "./src/components/PlaceModal";
import { Place } from "./src/store/reducers/places";
import { RootState } from "./src/store/reducers";
import * as actions from "./src/store/actions";
import withRoot from "./src/hoc/withRoot";

interface StateProps {
  places: Place[];
  selectedPlace?: null | Place;
}

interface DispatchProps {
  onAddPlace: (name: string) => void;
  onRemovePlace: () => void;
  onSelectPlace: (key: string) => void;
  onDeselectPlace: () => void;
}

type Props = StateProps & DispatchProps;

const App: React.FunctionComponent<Props> = ({
  places,
  selectedPlace,
  onAddPlace,
  onRemovePlace,
  onSelectPlace,
  onDeselectPlace
}) => (
  <View style={styles.container}>
    <PlaceModal
      open={selectedPlace !== null}
      place={selectedPlace}
      onItemDeleted={onRemovePlace}
      onClose={onDeselectPlace}
    />
    <FormList onSubmit={onAddPlace} />
    <ListItems places={places} onItemSelected={onSelectPlace} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});

const mapStateToProps = (state: RootState): StateProps => ({
  places: state.places.places,
  selectedPlace: state.places.selectedPlace
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onAddPlace: (name: string) => dispatch(actions.addPlace(name)),
  onRemovePlace: () => dispatch(actions.deletePlace()),
  onSelectPlace: (key: string) => dispatch(actions.selectPlace(key)),
  onDeselectPlace: () => dispatch(actions.deseletPlace())
});

export default withRoot(
  connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
