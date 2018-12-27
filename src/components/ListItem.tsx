import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

interface Props {
  children: React.ReactNode;
  img: {};
  onItemPressed: () => void;
}

const ListItem: React.FunctionComponent<Props> = ({
  children,
  img,
  onItemPressed
}) => (
  <TouchableOpacity onPress={onItemPressed}>
    <View style={styles.listItem}>
      <Image source={img} style={styles.image} />
      <Text style={styles.heading}>{children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 8,
    padding: 10,
    width: "100%",
    backgroundColor: "#eee"
  },
  image: {
    marginRight: 8,
    width: 64,
    height: 64
  },
  heading: {
    fontSize: 18
  }
});

export default ListItem;
