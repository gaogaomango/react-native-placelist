import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === "android" ? "md-map" : "ios-map", 30),
    Icon.getImageSource(
      Platform.OS === "android" ? "md-share-alt" : "ios-share",
      30
    ),
    Icon.getImageSource(Platform.OS === "android" ? "md-menu" : "ios-menu", 30)
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: "awesome-places.SideDrawer",
              passProps: {
                text: "This is a left side menu screen"
              }
            }
          },
          center: {
            bottomTabs: {
              children: [
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: "awesome-places.SharePlaceScreen",
                          passProps: {
                            text: "This is SharePlaceScreen"
                          },
                          options: {
                            topBar: {
                              title: {
                                text: "SharePlaceScreen Title"
                              },
                              leftButtons: [
                                {
                                  id: "sideDrawerToggle",
                                  icon: sources[2],
                                  title: "Menu",
                                  color: "orange"
                                }
                              ]
                            }
                          }
                        }
                      }
                    ],
                    options: {
                      bottomTab: {
                        text: "Tab SharePlaceScreen",
                        icon: sources[0],
                        testID: "FIRST_TAB_BAR_BUTTON",
                        selectedIconColor: "orange"
                      }
                    }
                  }
                },
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: "awesome-places.FindPlaceScreen",
                          passProps: {
                            text: "This is FindPlaceScreen"
                          },
                          options: {
                            topBar: {
                              title: {
                                text: "FindPlaceScreen Title"
                              },
                              leftButtons: [
                                {
                                  id: "sideDrawerToggle",
                                  icon: sources[2],
                                  title: "Menu",
                                  color: "orange"
                                }
                              ]
                            }
                          }
                        }
                      }
                    ],
                    options: {
                      bottomTab: {
                        text: "Tab FindPlaceScreen",
                        icon: sources[1],
                        testID: "SECOND_TAB_BAR_BUTTON",
                        selectedIconColor: "orange"
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      }
    });
  });
};

export default startTabs;
