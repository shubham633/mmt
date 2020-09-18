import Icon from "react-native-vector-icons/MaterialCommunityIcons";

(function() {
  Promise.all([
    Icon.getImageSource("home", 11), 
    Icon.getImageSource("wallet-travel", 11),
    Icon.getImageSource("offer", 11),
    Icon.getImageSource("circle-double", 11),
    Icon.getImageSource("wallet", 11)
  ]).then(async values => {
    global.icons = values; 
  });
})();