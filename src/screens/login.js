import React, { Component } from "react";
import { autobind } from "core-decorators";
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import Auth0 from "react-native-auth0";
import { withNavigate } from "utils/routing";
const auth0 = new Auth0({
  domain: "junk-starter.au.auth0.com",
  clientId: "iFhQxJKmXMRgfriQMDU9wN8INNYL7RpQ"
});

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
    // borderWidth: 1,
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
class AuthScreen extends Component {
  static navigationOptions = {
    title: "Junk Starter",
    headerStyle: {
      backgroundColor: "#424242"
    },
    headerTintColor: "#FFF",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  state = {
    loading: true
  };

  componentWillMount() {
    this.attemptAuth();
  }

  attemptAuth() {
    const { navigate } = this.props;

    AsyncStorage.getItem("authCredentials").then(credentials => {
      const parsedCredentials = JSON.parse(credentials);
      const currentTimestamp = +(new Date().getTime() / 1000).toFixed(0);
      let hasExpired = false;

      if (parsedCredentials) {
        hasExpired =
          (parsedCredentials.expireTimestamp || 0) < currentTimestamp;
      }

      if (!parsedCredentials || hasExpired) {
        auth0.webAuth
          .authorize({
            scope: "openid profile email",
            audience: "https://junk-starter.au.auth0.com/userinfo"
          })
          .then(credentials => {
            if (credentials) {
              credentials.expireTimestamp =
                currentTimestamp + credentials.expiresIn;

              AsyncStorage.setItem(
                "authCredentials",
                JSON.stringify(credentials)
              );
              navigate("Dashboard");
              this.resetLoading();
            }
          })
          .catch(error => console.log(error));
      } else if (parsedCredentials && !hasExpired) {
        navigate("Dashboard");
        this.resetLoading();
      }
    });
  }

  resetLoading() {
    setTimeout(
      () =>
        this.setState({
          loading: false
        }),
      420
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        {!loading && (
          <TouchableNativeFeedback
            onPress={this.attemptAuth}
            background={TouchableNativeFeedback.SelectableBackground()}
          >
            <View style={styles.buttonWrapper}>
              <Text style={styles.buttonLabel}> LOGIN </Text>
            </View>
          </TouchableNativeFeedback>
        )}
        {loading && (
          <ActivityIndicator size="large" color="hsla(195, 100%, 44%, 1)" />
        )}
      </View>
    );
  }
}

export default AuthScreen;
