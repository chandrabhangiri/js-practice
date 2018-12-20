npm install firebase --save

var firebase = require("firebase");

var config = {
    apiKey: "",
    authDomain: "dunzo-firebase-test.firebaseapp.com",
    databaseURL: "https://dunzo-firebase-test.firebaseio.com",
    projectId: "dunzo-firebase-test",
    storageBucket: "dunzo-firebase-test.appspot.com",
    messagingSenderId: "254051654021"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


  // The app only has access as defined in the Security Rules
var db = admin.database();
var ref = database.ref("/User");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

var starCountRef = firebase.database().ref('User');

starCountRef.on('value', function(snapshot) {
  console.log(snapshot.val());
});




firebase.database().ref('User').set(
    [{
    firstName: 'Test1',
    lastName: 'test1'
  },
  {
    firstName: 'Chandra',
    lastName: 'Giri'
  },{
    firstName: 'Kavish',
    lastName: 'Dwivedi'
  },{
    firstName: 'Test2',
    lastName: 'test2'
  }]
  );

firebase.database().ref('User').set(
    [{
    firstName: 'Test1',
    lastName: 'test1'
  },
  {
    firstName: 'Chandra',
    lastName: 'Giri'
  },{
    firstName: 'Kavish',
    lastName: 'Dwivedi'
  },{
    firstName: 'Test2',
    lastName: 'test2'
  }]
  );

firebase.database().ref('Users').once('value').then(function(snapshot) {
  console.log(snapshot.val());
});

console.log(firebase.database().ref('User').read());
