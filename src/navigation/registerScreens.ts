import { Navigation } from "react-native-navigation";
import { Screens } from "./Screens";
import {
  LoginScreen,
  FindPlaceScreen,
  SharePlaceScreen,
  PlaceDetailScreen
} from "../screens";
import withRoot from "../hoc/withRoot";

export default () => {
  Navigation.registerComponent(Screens.LOGIN_SCREEN, () =>
    withRoot(LoginScreen)
  );
  Navigation.registerComponent(Screens.SHARE_PLACE_SCREEN, () =>
    withRoot(SharePlaceScreen)
  );
  Navigation.registerComponent(Screens.FIND_PLACE_SCREEN, () =>
    withRoot(FindPlaceScreen)
  );
  Navigation.registerComponent(Screens.PLACE_DETAIL_SCREEN, () =>
    withRoot(PlaceDetailScreen)
  );
};
