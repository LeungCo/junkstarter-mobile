import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { autobind } from "core-decorators";

const styles = ({ white, extraLarge }) =>
  StyleSheet.create({
    text: {
      fontWeight: "600",
      fontSize: extraLarge ? 28 : 24,
      color: white ? "white" : "#424242"
    }
  });

@autobind
class Default extends Component {
  constructor(props) {
    super(props);

    this.styles = styles(props);
  }

  render() {
    const { children, ...props } = this.props;

    return (
      <Text style={this.styles.text} {...props}>
        {children}
      </Text>
    );
  }
}

export default Default;
