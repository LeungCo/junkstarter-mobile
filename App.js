import React from "react";
import { autobind } from "core-decorators";
import { StyleSheet } from "react-native";
import { RoutableScreens } from "./src/route-config";

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
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RoutableScreens />;
  }
}

export default App;
