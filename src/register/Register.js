import {Navigation} from 'react-native-navigation';
import { RNNDrawer } from "react-native-navigation-drawer-extension";
import Signin from '../screen/auth/Signin';
import Signup from '../screen/auth/Signup';
import Home from '../screen/Home';
import MyTrips from '../screen/MyTrips';
import Offers from '../screen/Offers';
import TripIdeas from '../screen/TripIdeas';
import Wallet from '../screen/Wallet';
import Drawer from '../screen/Drawer';
import Signout from '../components/Signout';

export function register() {
  Navigation.registerComponent(`Signin`, () => Signin);
  Navigation.registerComponent(`Signup`, () => Signup);
  Navigation.registerComponent(`Home`, () => Home);
  Navigation.registerComponent(`MyTrips`, () => MyTrips);
  Navigation.registerComponent(`Offers`, () => Offers);
  Navigation.registerComponent(`TripIdeas`, () => TripIdeas);
  Navigation.registerComponent(`Wallet`, () => Wallet);
  Navigation.registerComponent(`Signout`, () => Signout);
  Navigation.registerComponent("Drawer", () => RNNDrawer.create(Drawer));
  
}

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a'
  },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
});
