import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Auth extends Component {

  render() {
    return(
      <View>
        <Header />
        <SignUp />
      </View>
    );
  }
}

AppRegistry.registerComponent('Auth', () => Auth;