import React from "react";
import { autobind } from "core-decorators";
import { StyleSheet, View, Text } from "react-native";
import api from "utils/api";

const sneakyLog = meta => data => {
  console.log(meta, JSON.stringify(data, null, 2));
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

const allUserQuery = `{
  allUsers {
    nodes {
      id
      userId
      email
      password
      createdOn
      modifiedOn
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
      users: []
    };

    api
      .post("/graphql", {
        query: sneakyLog("QUERY")(allUserQuery)
      })
      .then(response => {
        sneakyLog("GRAPHQL")(response);
        this.setState({
          isLoading: false,
          users: response.data.data.allUsers.nodes
        });
      })
      .catch(sneakyLog("NETWORK ERROR"));

    // TODO: Use this for the list of available invites
    // {
    //   users.map(user => (
    //     <Text> {JSON.stringify(user, null, 2)} </Text>
    //   ))
    // }
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <View style={styles.container}>
        <Text> Loading... </Text>
      </View>
    ) : (
      <View style={styles.container}>
        <Text>Loaded</Text>
      </View>
    );
  }
}

export default Home;
