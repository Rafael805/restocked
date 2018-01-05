import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import HomeCards from '../../components/HomeCards';

export default class HomeScreen extends Component {
   static navigationOptions = {
      title: 'Home'
};

   render() {
      return (
         <Container>
            <Content>
               <HomeCards />
               <HomeCards />
               <HomeCards />
            </Content>
         </Container>
      );
   }
}
