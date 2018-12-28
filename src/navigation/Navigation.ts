import { Navigation } from "react-native-navigation";
import { Screens } from "./Screens";
import registerScreens from "./registerScreens";
import Icon from "react-native-vector-icons/Ionicons";

// Register all screens on launch
registerScreens();

export const pushTabsScreen = () => {
  Promise.all([
    Icon.getImageSource("md-map", 32),
    Icon.getImageSource("md-search", 32)
  ]).then(icons => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              component: {
                name: Screens.SHARE_PLACE_SCREEN,
                options: {
                  bottomTab: {
                    text: "Share place",
                    icon: icons[0]
                  }
                }
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: Screens.FIND_PLACE_SCREEN,
                      options: {
                        topBar: {
                          title: {
                            text: "Find Place"
                          }
                        }
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    text: "Find Place",
                    icon: icons[1]
                  },
                  topBar: {
                    title: {
                      text: "Find Place"
                    }
                  }
                }
              }
            }
          ]
        }
      }
    });
  });
};

export const pushLoginScreen = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: Screens.LOGIN_SCREEN
      }
    }
  });
};
