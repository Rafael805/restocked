import React from 'react';
import { Image, Button, StyleSheet } from 'react-native';

const robot = require('../assets/images/robot-dev.png');

export default class Clippers extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Clippers',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={robot}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
