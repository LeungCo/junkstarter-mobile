import React, { Component } from "react";
import { autobind } from "core-decorators";
import { StyleSheet, View } from "react-native";
import Button, { TextButton } from "components/button";
import RotatingImages from "components/rotating-images";
import { Header } from "components/text";
import Box from "components/box";
import { withNavigate } from "utils/routing";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 15
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
class Welcome extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  handleSignupNavigation() {
    const { navigate } = this.props;

    // TODO: Figure out if we need to go to a new sign up screen?
    // Maybe we can automatically trigger sign up flow from Auth0
    // navigate("DatePicker")();
    navigate("UserType")();
  }

  handleLoginNavigation() {
    const { navigate } = this.props;
    navigate("Login")();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>Junk Trips</Header>
        <RotatingImages />
        <Box alignItems={"center"}>
          <Button onPress={this.handleSignupNavigation}>
            {" "}
            BEGIN YOUR JOURNEY{" "}
          </Button>
          <TextButton onPress={this.handleLoginNavigation}>
            Already have an account?
          </TextButton>
        </Box>
      </View>
    );
  }
}

export default Welcome;
