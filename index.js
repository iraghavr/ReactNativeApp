/** @format */

import { Navigation } from "react-native-navigation";
import { pushLoginScreen } from "./src/navigation";

Navigation.events().registerAppLaunchedListener(() => {
  pushLoginScreen();
});
