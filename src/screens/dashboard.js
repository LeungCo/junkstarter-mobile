import React from "react";
import { autobind } from "core-decorators";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Header } from "components/text";
import Box from "components/box";
import api from "utils/api";
import { TextButton } from "components/button";
import { PADDING } from "../theme";

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
  },
  headerWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "darkgrey",
    backgroundColor: "lightgrey"
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
      header: null
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
        query: allUserQuery
      })
      .then(response => {
        this.setState({
          isLoading: false,
          boats: response.data.data.allBoats.nodes
        });
      })
      .catch(console.error);
  }

  renderBoat({ item: boat }) {
    return <Text>{boat.id}</Text>;
  }

  render() {
    const { isLoading, boats } = this.state;

    return (
      <Box backgroundColor={"white"}>
        <View style={styles.headerWrapper}>
          <Box padding={PADDING.L}>
            <Box alignItems={"flex-end"}>
              <TextButton onPress={console.log}>Profile</TextButton>
            </Box>
            <Header extraLarge>Junk Trips</Header>
          </Box>
        </View>
        {isLoading ? (
          <View style={styles.container}>
            <Text> Loading... </Text>
          </View>
        ) : (
          <FlatList
            contentContainerStyle={styles.listStyles}
            data={boats}
            renderItem={this.renderBoat}
          />
        )}
      </Box>
    );
  }
}

export default Home;
