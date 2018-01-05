import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

const logo = require('../../assets/images/barber2.png');

export default class LoginScreen extends Component {
   static navigationOptions = {
      title: 'Account',
   };

   render() {
      return (
         <Container>
           <Content>
             <Image source={logo} style={styles.logo} />
             <Form>
               <Item floatingLabel>
                 <Label>Username</Label>
                 <Input />
               </Item>
               <Item floatingLabel last>
                 <Label>Password</Label>
                 <Input />
               </Item>
             </Form>
             <Button primary block>
                <Text style={{ color: '#FFF' }}>
                   LOGIN
                </Text>
             </Button>
           </Content>
         </Container>
      );
   }
}

const styles = StyleSheet.create({
   logo: {
      flex: 1,
      marginLeft: 70,
      justifyContent: 'center',
      alignItems: 'center',
      height: 120,
      width: 120
   },
});
