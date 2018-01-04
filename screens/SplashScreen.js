import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const backgroundImage = require('../assets/images/chopshop.jpg');

export default class SplashScreen extends Component {
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.imageContainer}>
               <Image
                  source={backgroundImage}
                  style={{
                     backgroundColor: '#ccc',
                     flex: 1,
                     position: 'absolute',
                     width: '100%',
                     height: '100%',
                     justifyContent: 'center',
                  }}
               />
            </View>

            <View style={styles.textContainer}>
               <Text style={styles.welcomeText}>
                  Barber Restocks
               </Text>
            </View>
         </View>
      );
   }
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#eee'
   },
   imageContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
   },
   textContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      justifyContent: 'center',
   },
   welcomeText: {
      textAlign: 'center',
      color: '#FFF',
      fontSize: 40,
   }
});
