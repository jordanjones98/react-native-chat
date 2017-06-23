import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

// Import componenets
import Component2 from './app/components/Component2/Component2.js';
import Header from './app/components/Header/Header.js';
import SignUp from './app/components/SignUp/SignUp.js';

export default class ChatApp extends Component {

  render() {
    return(
      <View>
        <Header />
        <SignUp />
      </View>
    );
  }
}

AppRegistry.registerComponent('ChatApp', () => ChatApp);