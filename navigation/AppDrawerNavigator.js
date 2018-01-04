import { DrawerNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import LinksScreen from '../screens/LinksScreen';

const AppDrawerNavigator = DrawerNavigator({
   LoginScreen: { screen: LoginScreen },
   LinksScreen: { screen: LinksScreen }
});

export default AppDrawerNavigator;
