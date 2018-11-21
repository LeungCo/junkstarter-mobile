import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { autobind } from "core-decorators";

const styles = ({ justifyContent, alignItems }) =>
  StyleSheet.create({
    container: {
      width: "100%",
      alignItems,
      justifyContent
    }
  });

@autobind
class Box extends Component {
  constructor(props) {
    super(props);

    this.styles = styles(props);
  }

  render() {
    const { children, ...props } = this.props;
    return <View style={this.styles.container}>{children}</View>;
  }
}

export default Box;
