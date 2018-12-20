let express = require('express');
let app = express();
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

  var ref = database.ref("User");




app.get('/firebase/add/:firstName/:lastName', function(req, res) {
var updates = {};
  updates['firstName'] = req.params.firstName;
  updates['lastName'] = req.params.lastName;

firebase.database().ref().update(updates);
    res.end("Done!");
});
 
 app.get('/firebase/readAllData', function(req, res) {
ref.on('value', function(snapshot) {
  console.log(""+snapshot.val());
  res.end(""+snapshot.val())
});

 
});
var ser = app.listen(10019);
