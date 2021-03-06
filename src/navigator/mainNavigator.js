import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings202231Navigator from '../features/Settings202231/navigator';
import UserProfile202224Navigator from '../features/UserProfile202224/navigator';
import Settings202223Navigator from '../features/Settings202223/navigator';
import Settings202221Navigator from '../features/Settings202221/navigator';
import SignIn2202219Navigator from '../features/SignIn2202219/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings202231: { screen: Settings202231Navigator },
UserProfile202224: { screen: UserProfile202224Navigator },
Settings202223: { screen: Settings202223Navigator },
Settings202221: { screen: Settings202221Navigator },
SignIn2202219: { screen: SignIn2202219Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
