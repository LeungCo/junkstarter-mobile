import React, { Component } from "react";
import { autobind } from "core-decorators";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";
import { withNavigate } from "utils/routing";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25
  },
  buttonWrapper: {
    backgroundColor: "hsla(195, 100%, 44%, 1)",
    borderRadius: 3,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
    paddingBottom: 15
  },
  buttonLabel: {
    color: "#FFFFFF",
    margin: 0,
    fontWeight: "600",
    fontSize: 16
  }
});

@withNavigate
@autobind
class SelectInterests extends Component {
  static navigationOptions = () => {
    return {
      title: "Select Interests",
      headerStyle: {
        backgroundColor: "#424242"
      },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  render() {
    const { navigate } = this.props;

    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={navigate("SignUp")}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonLabel}> Select Interests </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default SelectInterests;
