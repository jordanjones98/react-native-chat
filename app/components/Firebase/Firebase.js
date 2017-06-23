import * as Firebase from 'firebase'

// Initialize Firebase
var config = {
apiKey: "AIzaSyDyONqXa3GsUskeYWzSgOz3icSzy5-Zots",
authDomain: "chat-1b349.firebaseapp.com",
databaseURL: "https://chat-1b349.firebaseio.com",
};
export const firebaseRef = firebase.initializeApp(config);