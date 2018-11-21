import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { autobind } from "core-decorators";

const styles = StyleSheet.create({
  text: {
    fontWeight: "600",
    fontSize: 24,
    color: "#424242"
  }
});

@autobind
class Default extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <Text style={styles.text} {...props}>
        {children}
      </Text>
    );
  }
}

export default Default;
