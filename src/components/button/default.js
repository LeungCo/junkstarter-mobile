import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";
import { autobind } from "core-decorators";
import { PADDING, FONT } from "theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "hsla(195, 100%, 44%, 1)",
    borderRadius: 8,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: PADDING.M,
    paddingBottom: PADDING.M
  },
  label: {
    color: "#FFFFFF",
    margin: 0,
    fontWeight: FONT.WEIGHT.SEMI_BOLD,
    fontSize: FONT.SIZE.L
  }
});

@autobind
class Default extends Component {
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

export default Default;
