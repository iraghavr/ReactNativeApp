import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { pushTabsScreen } from "../navigation";

class LoginScreen extends React.Component {
  login = () => {
    pushTabsScreen();
  };

  render() {
    return (
      <View style={styles.flex}>
        <Button title="Login" onPress={this.login} />
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

export default LoginScreen;
