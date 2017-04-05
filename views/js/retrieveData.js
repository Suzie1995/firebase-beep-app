// Initialize Firebase
var config = {
  apiKey: "AIzaSyA47PFbXllb4teaat_10j6FnVOKzK8SWB4",
  authDomain: "beep-app-1484774811866.firebaseapp.com",
  databaseURL: "https://beep-app-1484774811866.firebaseio.com",
  storageBucket: "beep-app-1484774811866.appspot.com",
};
firebase.initializeApp(config);

firebase.database().ref();
var ref = firebase.database().ref();

ref.once("value")
.then(function(snapshot) {
  var eventName = snapshot.child("eventName").val();
  console.log(eventName);
  $('#eventName').html(eventName);

  var startAddress = snapshot.child("startAddress").val();
  console.log(startAddress);
  $('#startAddress').html(startAddress);

  var endAddress = snapshot.child("endAddress").val();
  console.log(endAddress);
  $('#endAddress').html(endAddress);

  var pickUpAddressOne = snapshot.child("pickUpAddressOne").val();
  console.log(pickUpAddressOne);
  $('#pickUpAddressOne').html(pickUpAddressOne);

  var pickUpAddressTwo = snapshot.child("pickUpAddressTwo").val();
  console.log(pickUpAddressTwo);
  $('#pickUpAddressTwo').html(pickUpAddressTwo);

});
