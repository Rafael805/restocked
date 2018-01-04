import React, { Component } from 'react';
import { Container, Thumbnail, Body, Content, List, ListItem, Text } from 'native-base';
import SearchHeader from '../components/SearchHeader';

export default class HomeScreen extends Component {
   static navigationOptions = {
      drawerLabel: 'Home',
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
                <ListItem>
                  <Thumbnail square size={80} source={{ uri: 'https://www.bowmanbeauty.com/wp-content/uploads/2015/06/AN10061.jpg' }} />
                  <Body>
                    <Text>Clippers</Text>
                    <Text note>Professional clippers for fresh fades</Text>
                  </Body>
                </ListItem>

               <ListItem>
                  <Thumbnail square size={80} source={{ uri: 'https://www.beautymegashop.it/wp-content/uploads/2016/02/d.jpg' }} />
                  <Body>
                    <Text>Trimmers</Text>
                    <Text note>Professional trimmers for crisp lineups</Text>
                  </Body>
               </ListItem>

               <ListItem>
                  <Thumbnail square size={80} source={{ uri: 'https://www.bowmanbeauty.com/wp-content/uploads/2015/06/AN3060.jpg' }} />
                  <Body>
                    <Text>Blades</Text>
                    <Text note>Replacement blades for your clippers and trimmers</Text>
                  </Body>
               </ListItem>

               <ListItem>
                  <Thumbnail
                     square
                     size={80}
                     source={{ uri: 'https://res.cloudinary.com/trendhim/image/upload/f_auto,c_pad,q_80,w_1600,h_1600/media/catalog/product/1/-/1-3_155.jpg' }}
                  />
                  <Body>
                    <Text>Shaving</Text>
                    <Text note>Achieve the perfect shave</Text>
                  </Body>
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
                    <Text note>
                       Soft, water-repellent and durable material, keeps your client's
                       clothes dry and clean.
                    </Text>
                  </Body>
               </ListItem>

               <ListItem>
                  <Thumbnail
                     square
                     size={80}
                     source={{ uri: 'https://www.mdbarber.com/v/vspfiles/photos/MD0018B-3.jpg' }}
                  />
                  <Body>
                    <Text>Clipper Accessories</Text>
                    <Text note>Customize your tools to your liking</Text>
                  </Body>
               </ListItem>
             </List>
           </Content>
         </Container>
      );
   }
}
