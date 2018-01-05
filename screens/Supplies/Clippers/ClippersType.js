import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Thumbnail, Body, Content, List, ListItem,
         Header, Right, Icon } from 'native-base';

import SearchHeader from '../../../components/SearchHeader';

export default class ClippersType extends Component {
   static navigationOptions = {
      title: 'ClippersType',
   };

   render() {
      return (
         <Container>
          <Content>
            <SearchHeader />

            <Header>
               <Text style={{ fontSize: 20 }}>
                  Browse by Brand
               </Text>
            </Header>

            <List style={{ backgroundColor: '#FFF' }}>
               <ListItem onPress={() => this.props.navigation.navigate('AllClippers')}>
                  <Thumbnail square size={80} source={{ uri: 'http://www.clipperoutlet.com/uploads/1/3/3/8/13389268/s915718338577940696_p10_i1_w640.png' }} />
                  <Body>
                    <Text>All</Text>
                  </Body>
                  <Right>
                     <Icon name="arrow-forward" />
                  </Right>
               </ListItem>

               <ListItem onPress={() => this.props.navigation.navigate('AndisSupplies')}>
                  <Thumbnail square size={80} source={{ uri: 'https://www.bowmanbeauty.com/wp-content/uploads/2015/06/AN10061.jpg' }} />
                  <Body>
                    <Text>Andis</Text>
                  </Body>
                  <Right>
                     <Icon name="arrow-forward" />
                  </Right>
               </ListItem>

               <ListItem>
                  <Thumbnail square size={80} source={{ uri: 'https://www.beautymegashop.it/wp-content/uploads/2016/02/d.jpg' }} />
                  <Body>
                    <Text>Wahl</Text>
                  </Body>
                  <Right>
                     <Icon name="arrow-forward" />
                  </Right>
               </ListItem>

               <ListItem>
                  <Thumbnail square size={80} source={{ uri: 'http://www.osterstyle.com/on/demandware.static/-/Sites-master-catalog/default/dwb7df0aed/images/highres/076023-510-001-2.jpg' }} />
                  <Body>
                     <Text>Oster</Text>
                  </Body>
                  <Right>
                     <Icon name="arrow-forward" />
                  </Right>
               </ListItem>
            </List>
          </Content>
         </Container>
      );
   }
}
