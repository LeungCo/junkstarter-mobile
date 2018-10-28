import React from "react";
import { autobind } from "core-decorators";
import { StyleSheet, View, Text } from "react-native";

const sneakyLog = meta => data => {
  console.log(meta, data);
  return data;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
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
  }
});

@autobind
class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Dashboard", //`Connected to ${navigation.getParam("device", "Unknown").name}`,
      headerStyle: {
        backgroundColor: "hsla(353, 82%, 45%, 1)"
      },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      angle: 0,
      error: null,
      values: {}
    };
  }

  render() {
    const { error, angle } = this.state;

    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

export default Home;
