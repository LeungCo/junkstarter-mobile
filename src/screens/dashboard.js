import React from "react";
import { autobind } from "core-decorators";
import { StyleSheet, View, Text, FlatList } from "react-native";
import api from "utils/api";

const sneakyLog = meta => data => {
  console.log(meta, data);
  return data;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  },
  listStyles: {
    padding: 15
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

const allUserQuery = `{
  allBoats {
    nodes {
      id
    }
  }
}`;

@autobind
class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Dashboard",
      headerStyle: {
        backgroundColor: "#424242"
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
      isLoading: true,
      boats: []
    };

    api
      .post("/graphql", {
        query: sneakyLog("QUERY")(allUserQuery)
      })
      .then(response => {
        sneakyLog("GRAPHQL")(response);
        this.setState({
          isLoading: false,
          boats: response.data.data.allBoats.nodes
        });
      })
      .catch(sneakyLog("NETWORK ERROR"));
  }

  renderBoat({ item: boat }) {
    return <Text>{boat.id}</Text>;
  }

  render() {
    const { isLoading, boats } = this.state;
    return isLoading ? (
      <View style={styles.container}>
        <Text> Loading... </Text>
      </View>
    ) : (
      <FlatList
        contentContainerStyle={styles.listStyles}
        data={boats}
        renderItem={this.renderBoat}
      />
    );
  }
}

export default Home;
