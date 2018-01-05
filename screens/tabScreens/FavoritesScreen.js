import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

export default class FavoritesScreen extends Component {
   static navigationOptions = {
      title: 'Favorites',
   };

   render() {
      return (
         <View>
            <Image source={{ uri : 'http://glch.org.au/wp-content/uploads/2015/09/Coming-Soon-1024x1024.jpg' }} />
            <Text>
               Favorites Tab Coming Soon!
            </Text>
         </View>
      );
   }
}
