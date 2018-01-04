import React, { Component } from 'react';
import { Header, Item, Icon, Input } from 'native-base';

export default class SearchHeader extends Component {
   render() {
      return (
            <Header
               style={{ paddingBottom: 12 }}
               searchBar
               rounded
            >
               <Item>
                  <Icon name="ios-search" />
                  <Input
                     placeholder="Search Restocked for items"
                     onChangeText={this.props.onChangeText}
                     returnKeyType="search"
                     onSubmitEditing={this.props.beerSearch}
                  />
               </Item>
            </Header>
      );
   }
}
