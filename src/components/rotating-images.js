import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { autobind } from "core-decorators";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

@autobind
class Default extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <View style={styles.container} {...props}>
        <Text>Image Rotator Here.</Text>
      </View>
    );
  }
}

export default Default;
