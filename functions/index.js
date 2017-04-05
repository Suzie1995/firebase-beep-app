var functions = require('firebase-functions');
var firebase = require('firebase');
var firebaseui = require('firebaseui');

$(function() {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyA47PFbXllb4teaat_10j6FnVOKzK8SWB4",
    authDomain: "beep-app-1484774811866.firebaseapp.com",
    databaseURL: "https://beep-app-1484774811866.firebaseio.com",
    storageBucket: "beep-app-1484774811866.appspot.com",
    // messagingSenderId: "946101429046"
  };
  firebase.initializeApp(config);
});

// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// })
