import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30)
  ]).then(sources => {
    Navigation.setRoot({
      root: {
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
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    text: "Tab SharePlaceScreen",
                    icon: sources[0],
                    testID: "FIRST_TAB_BAR_BUTTON"
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
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    text: "Tab FindPlaceScreen",
                    icon: sources[1],
                    testID: "SECOND_TAB_BAR_BUTTON"
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

export default startTabs;
