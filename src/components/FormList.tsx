import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

interface Props {
  onSubmit: (text: string) => void;
}

interface State {
  text: string;
}

class FormList extends React.Component<Props, State> {
  state = {
    text: ""
  };

  handleInput = (text: string) => {
    this.setState({ text });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={this.state.text}
          placeholder="Some text"
          onChangeText={text => this.handleInput(text)}
        />
        <Button onPress={this.handleSubmit} title="Click me" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  input: {
    width: "70%",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ced4da"
  }
});

export default FormList;
