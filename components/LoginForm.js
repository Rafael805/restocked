import React, { Component } from 'react';
import { KeyboardAvoidingView, Text, TextInput, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'native-base';

export default class LoginForm extends Component {
   render() {
      return (
         <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TextInput
               placeholder="username or email"
               placeholderTextColor="rgba(255,255,255,0.7)"
               returnKeyType="next"
               keyboardType="email-address"
               onSubmitEditing={() => this.passwordInput.focus()}
               style={styles.input}
            />
            <TextInput
               placeholder="password"
               placeholderTextColor="rgba(255,255,255,0.7)"
               returnKeyType="go"
               secureTextEntry
               ref={(input) => this.passwordInput = input}
               style={styles.input}
            />
               <Button primary block>
                  <Text style={{ color: '#FFF' }}>
                     LOGIN
                  </Text>
               </Button>
         </KeyboardAvoidingView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      padding: 20,
   },
   input: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: 20,
      color: '#FFF',
      paddingHorizontal: 10
   },
});
