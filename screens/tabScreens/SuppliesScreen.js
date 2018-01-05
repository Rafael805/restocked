import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Thumbnail, Body, Content, List, ListItem, Right, Icon } from 'native-base';
import SearchHeader from '../../components/SearchHeader';

export default class SuppliesScreen extends Component {
   static navigationOptions = {
      title: 'Supplies',
   };

   render() {
      return (
         <Container>
           <Content>
             <SearchHeader />
             <List style={{ backgroundColor: '#FFF' }}>
                <ListItem>
                   <Text>
                      RESTOCK TODAY!
                   </Text>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate('ClippersType')}>
                  <Thumbnail square size={80} source={{ uri: 'https://www.bowmanbeauty.com/wp-content/uploads/2015/06/AN10061.jpg' }} />
                  <Body>
                    <Text>Clippers</Text>
                  </Body>
                  <Right>
                     <Icon name="arrow-forward" />
                  </Right>
                </ListItem>

               <ListItem>
                  <Thumbnail square size={80} source={{ uri: 'https://www.beautymegashop.it/wp-content/uploads/2016/02/d.jpg' }} />
                  <Body>
                    <Text>Trimmers</Text>
                  </Body>
                  <Right>
                     <Icon name="arrow-forward" />
                  </Right>
               </ListItem>

               <ListItem>
                  <Thumbnail square size={80} source={{ uri: 'https://www.bowmanbeauty.com/wp-content/uploads/2015/06/AN3060.jpg' }} />
                  <Body>
                     <Text>Blades</Text>
                  </Body>
                  <Right>
                     <Icon name="arrow-forward" />
                  </Right>
               </ListItem>

               <ListItem>
                  <Thumbnail
                     square
                     size={80}
                     source={{ uri: 'https://res.cloudinary.com/trendhim/image/upload/f_auto,c_pad,q_80,w_1600,h_1600/media/catalog/product/1/-/1-3_155.jpg' }}
                  />
                  <Body>
                    <Text>Shaving</Text>
                  </Body>
                  <Right>
                     <Icon name="arrow-forward" />
                  </Right>
               </ListItem>

               <ListItem>
                  <Thumbnail
                     square
                     size={80}
                     source={{ uri: 'http://johnnybhaircare.com/wp-content/uploads/2014/01/JB_Cutting_Cape_black.jpg' }}
                  />
                  <Body>
                    <Text>
                       Cutting Capes
                    </Text>
                  </Body>
                  <Right>
                     <Icon name="arrow-forward" />
                  </Right>
               </ListItem>

               <ListItem>
                  <Thumbnail
                     square
                     size={80}
                     source={{ uri: 'https://www.mdbarber.com/v/vspfiles/photos/MD0018B-3.jpg' }}
                  />
                  <Body>
                    <Text>Clipper Accesories</Text>
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
