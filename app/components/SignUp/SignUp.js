
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, Button } from 'react-native';
import * as firebase from 'firebase'
// import { firebaseRef } from 'Firebase'

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};

    this.signup = this.signup.bind(this);
  }

  signup() {
  

  // Initialize Firebase
  var config = {
  apiKey: "AIzaSyDyONqXa3GsUskeYWzSgOz3icSzy5-Zots",
  authDomain: "chat-1b349.firebaseapp.com",
  databaseURL: "https://chat-1b349.firebaseio.com",
  };
  export const firebaseRef = firebase.initializeApp(config);

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  }

  render() {
    return(
      <View style={styles.signUpMain}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(email) => this.setState({email})}
            autoCapitalize="none"
          />
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            password={true}
            autoCapitalize="none"
            onChangeText={(password) => this.setState({password})}
          />
        </View>        
        <View>
          <Button onPress={this.signup} textStyle={{fontSize: 18}} title="signup">
            Sign up
          </Button>
        </View>  
      </View>
    );
  }
}


const styles = StyleSheet.create({
    signUpMain: {
        backgroundColor: '#49bcbc',
        height: '100%',
        padding: 15,
    },
    input: {
        height: 40,

    }
});


AppRegistry.registerComponent('SignUp', () => SignUp);