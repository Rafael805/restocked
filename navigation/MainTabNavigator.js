import React from 'react';
import { Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const MainTabNavigator = TabNavigator({
   Home: { screen: HomeScreen },
   Favorites: { screen: FavoritesScreen },
   Account: { screen: LoginScreen }
   },
   {
      tabBarPosition: 'bottom',
      tabBarComponent: props => {
         return (
            <Footer>
               <FooterTab>
                  <Button
                     vertical
                     active={props.navigationState.index === 0}
                     onPress={() => props.navigation.navigate('Home')}
                  >
                     <Icon ios='ios-home' android="md-home" />
                     <Text>Home</Text>
                  </Button>

                  <Button
                     vertical
                     active={props.navigationState.index === 1}
                     onPress={() => props.navigation.navigate('Favorites')}
                  >
                     <Icon ios='ios-heart' android="md-heart" />
                     <Text>Favorites</Text>
                  </Button>

                  <Button
                     vertical
                     active={props.navigationState.index === 2}
                     onPress={() => props.navigation.navigate('Account')}
                  >
                     <Icon ios='ios-person' android="md-person" />
                     <Text>Account</Text>
                  </Button>
               </FooterTab>
            </Footer>
         );
      }
   });

export default MainTabNavigator;
