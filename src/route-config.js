import {
  createStackNavigator
} from 'react-navigation';
import HomeScreen from './screens/home';
import Auth0Screen from './screens/auth';

export const RoutableScreens = createStackNavigator({
  Auth0: Auth0Screen,
  Home: {
    screen: HomeScreen
  }
}, {
  initialRouteName: 'Auth0',
});
