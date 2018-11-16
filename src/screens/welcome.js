import React, { Component } from "react";
import { autobind } from "core-decorators";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25
  },
  deviceName: {
    backgroundColor: "#32b3ff",
    padding: 5,
    margin: 10
  },
  deviceService: {
    backgroundColor: "#00FF00",
    padding: 5,
    margin: 10
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

@autobind
class Welcome extends Component {
  static navigationOptions = () => {
    return {
      title: "Welcome to Junk Starter",
      headerStyle: {
        backgroundColor: "#424242"
      },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  handleSignupNavigation() {
    const {
      navigation: { navigate }
    } = this.props;

    // TODO: Figure out if we need to go to a new sign up screen?
    // Maybe we can automatically trigger sign up flow from Auth0
    navigate("DatePicker");
  }

  handleLoginNavigation() {
    const {
      navigation: { navigate }
    } = this.props;

    navigate("Login");
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={this.handleSignupNavigation}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonLabel}> SIGN UP </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={this.handleLoginNavigation}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonLabel}> LOGIN </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default Welcome;
