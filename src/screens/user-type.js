import React, { Component } from "react";
import { autobind } from "core-decorators";
import { StyleSheet, View } from "react-native";
import Button from "components/button";
import { Header } from "components/text";
import Box from "components/box";
import { withNavigate } from "utils/routing";
import { COLORS, PADDING, HEIGHT } from "theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    padding: PADDING.XL,
    backgroundColor: COLORS.GREEN
  }
});

@withNavigate
@autobind
class UserType extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  goOnATrip() {
    const { navigate } = this.props;
    navigate("Dashboard")();
  }

  organiseATrip() {
    const { navigate } = this.props;
    navigate("Dashboard")();
  }

  render() {
    return (
      <View style={styles.container}>
        <Box mt={PADDING.PERCENT.S}>
          <Header extraLarge white>
            What would
          </Header>
          <Header extraLarge white>
            you like to do?
          </Header>
        </Box>
        <Box mt={PADDING.PERCENT.L} alignItems={"center"}>
          <Button width={230} onPress={this.goOnATrip}>
            Go on a Junk Trip
          </Button>
        </Box>
        <Box mt={PADDING.PERCENT.M} alignItems={"center"}>
          <Button width={230} onPress={this.organiseATrip}>
            Organise Junk Trips
          </Button>
        </Box>
      </View>
    );
  }
}

export default UserType;
