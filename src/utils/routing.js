import React, { Component } from "react";
import hoistNonReactStatic from "hoist-non-react-statics";
import { getDisplayName } from "utils/react";

export const withNavigate = WrappedComponent => {
  class WithNavigate extends Component {
    render() {
      return (
        <WrappedComponent
          navigate={routeName => () =>
            this.props.navigation.navigate(routeName)}
          {...this.props}
        />
      );
    }
  }

  WithNavigate.displayName = `WithNavigate(${getDisplayName(
    WrappedComponent
  )})`;

  hoistNonReactStatic(WithNavigate, WrappedComponent);

  return WithNavigate;
};
