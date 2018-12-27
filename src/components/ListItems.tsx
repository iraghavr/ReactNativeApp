import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "./ListItem";

interface Props {
  places: {
    key: string;
    value: string;
    image: {};
  }[];
  onItemSelected: (key: string) => void;
}

const ListItems: React.FunctionComponent<Props> = ({
  places,
  onItemSelected
}) => (
  <FlatList
    data={places}
    style={styles.listContainer}
    renderItem={({ item }) => (
      <ListItem img={item.image} onItemPressed={() => onItemSelected(item.key)}>
        {item.value}
      </ListItem>
    )}
  />
);

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default ListItems;
