import { createStackNavigator } from "react-navigation";

import Login from "./screens/login";
import SignUp from "./screens/sign-up";
import Welcome from "./screens/welcome";
import Dashboard from "./screens/dashboard";
import DatePicker from "./screens/trip/date-picker";
import InviteFriends from "./screens/user/invite-friends";
import ProfilePicture from "./screens/user/profile-picture";
import SelectInterests from "./screens/user/select-interests";

export const RoutableScreens = createStackNavigator(
  {
    Welcome,
    //
    DatePicker,
    SelectInterests,
    SignUp,
    ProfilePicture,
    InviteFriends,
    //
    Login,
    Dashboard
  },
  {
    initialRouteName: "Welcome"
  }
);
