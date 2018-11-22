import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";
import { autobind } from "core-decorators";
import { PADDING, FONT, COLORS } from "theme";

const styles = ({ width }) =>
  StyleSheet.create({
    container: {
      width,
      backgroundColor: COLORS.BLUE,
      borderRadius: 8,
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: PADDING.M,
      paddingBottom: PADDING.M,
      alignItems: "center"
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
  constructor(props) {
    super(props);
    this.styles = styles(props);
  }
  render() {
    const { onPress, children, ...props } = this.props;
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={this.styles.container}>
          <Text style={this.styles.label}>{children}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default Default;
