import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Thumbnail, Right } from 'native-base';
import { Linking } from 'react-native';

import SearchHeader from '../../../components/SearchHeader';

export default class AndisSupplies extends Component {
   static navigationOptions = {
      title: 'AllClippers',
   };

   render() {
      return (
         <Container>
           <Content>
            <SearchHeader />
             <Text style={{ backgroundColor: '#FFF', padding: 10 }}>
                3544 results
             </Text>
            <Card>
                <CardItem button onPress={() => Linking.openURL('https://www.amazon.com/Andis-15-Watt-Adjustable-Clipper-01557/dp/B000BBGS36/ref=sr_1_1_s_it?s=beauty&ie=UTF8&qid=1515145819&sr=1-1&keywords=andis+master')} >
                  <Thumbnail square size={80} source={{ uri: 'https://www.bowmanbeauty.com/wp-content/uploads/2015/06/AN10061.jpg' }} />
                  <Right>
                     <Text>
                       Andis Fade Master
                     </Text>
                     <Text>
                        $56.99
                     </Text>
                  </Right>
               </CardItem>
             </Card>

             <Card>
                <CardItem>
                  <Thumbnail square size={80} source={{ uri: 'https://www.bowmanbeauty.com/wp-content/uploads/2015/06/AN10061.jpg' }} />
                  <Right>
                     <Text>
                       Andis Fade Master
                     </Text>
                     <Text>
                        $56.99
                     </Text>
                  </Right>
               </CardItem>
             </Card>
           </Content>
         </Container>

      );
   }
}
