import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { autobind } from "core-decorators";

const styles = ({
  backgroundColor,
  flex,
  justifyContent,
  alignItems,
  mt,
  padding
}) =>
  StyleSheet.create({
    container: {
      width: "100%",
      flex: flex ? flex : justifyContent ? 1 : 0,
      alignItems,
      justifyContent,
      marginTop: mt || null,
      padding,
      backgroundColor
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
