import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";
import { autobind } from "core-decorators";
import { PADDING } from "theme";

const styles = StyleSheet.create({
  container: {},
  label: {
    color: "#0000FF",
    margin: 0,
    fontWeight: "600",
    fontSize: 12,
    padding: PADDING.M
  }
});

@autobind
class TextButton extends Component {
  render() {
    const { onPress, children, ...props } = this.props;
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={styles.container} {...props}>
          <Text style={styles.label}>{children}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default TextButton;
