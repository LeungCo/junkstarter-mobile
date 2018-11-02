import React from "react";
import {
  autobind
} from "core-decorators";
import {
  RoutableScreens
} from "./src/route-config";

@autobind
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RoutableScreens / > ;
  }
}

export default App;
