import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';

import LoginForm from '../components/LoginForm';

const logo = require('../assets/images/barber.png');

export default class LoginScreen extends Component {
   static navigationOptions = {
      title: 'Login',
   };

   render() {
      return (
         <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
               <Image source={logo} style={styles.logo} />
               <Text style={styles.title}>
                  An app made from fellow barbers for barbers.
               </Text>
               <Text style={styles.title}>
                  Sign up or login and restock now!
               </Text>
               <LoginForm />
            </View>
         </KeyboardAvoidingView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#3498db'
   },
   logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
   },
   logo: {
      height: 150,
      width: 150
   },
   title: {
      color: '#FFF',
      marginTop: 10,
      width: 220,
      textAlign: 'center',
      opacity: 0.9
   }
});
