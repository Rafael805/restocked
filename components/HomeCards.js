import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class HomeCards extends Component {
   render() {
      return (
         <Container>
           <Content>
             <Card>
               <CardItem>
                 <Left>
                   <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/a1/a3/7b/a1a37bcb043362e26af785d3d15eb90c.jpg' }} />
                   <Body>
                     <Text>Mister Cutts</Text>
                     <Text note>Raw Cuts Barbershop</Text>
                   </Body>
                 </Left>
               </CardItem>
               <CardItem cardBody>
                 <Image source={{ uri: 'https://i.ytimg.com/vi/1T5XAIdsK64/maxresdefault.jpg' }} style={{ height: 270, width: null, flex: 1 }} />
               </CardItem>
               <CardItem>
                 <Left>
                   <Button transparent>
                     <Icon active name="thumbs-up" />
                     <Text>12 Likes</Text>
                   </Button>
                 </Left>
                 <Body>
                   <Button transparent>
                     <Icon active name="chatbubbles" />
                     <Text>4 Comments</Text>
                   </Button>
                 </Body>
                 <Right>
                   <Text>11h ago</Text>
                 </Right>
               </CardItem>
             </Card>
            </Content>
         </Container>
      );
   }
}
