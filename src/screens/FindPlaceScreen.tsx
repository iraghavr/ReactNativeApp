import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import { Screens } from "../navigation";
import ListItems from "../components/ListItems";
import { Place } from "../store/reducers/places";
import { RootState } from "../store/reducers";

interface NavigationProps {
  componentId?: string;
}

interface StateProps {
  places: Place[];
}

type Props = NavigationProps & StateProps;

class FindPlaceScreen extends React.PureComponent<Props> {
  itemSelectedHandler = (key: string) => {
    if (this.props.componentId) {
      const place = this.props.places.find(place => place.key === key);
      if (place) {
        Navigation.push(this.props.componentId, {
          component: {
            name: Screens.PLACE_DETAIL_SCREEN,
            passProps: {
              place
            },
            options: {
              topBar: {
                title: {
                  text: place.value
                }
              }
            }
          }
        });
      }
    }
  };

  render() {
    const { places } = this.props;
    return (
      <View style={styles.flex}>
        <ListItems places={places} onItemSelected={this.itemSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = (state: RootState): StateProps => ({
  places: state.places.places
});

export default connect<StateProps, undefined, {}, RootState>(mapStateToProps)(
  FindPlaceScreen
);
