function updateInput(ish) {

  var firebaseRef = firebase.database().ref();

  var startAddress = $('#startAddress').val();
  var endAddress = $('#endAddress').val();
  var eventName = $('#eventName').val();
  var pickUpAddressOne = $('#pickUpAddressOne').val();
  var pickUpAddressTwo = $('#pickUpAddressTwo').val();

  firebaseRef.child("startAddress").set(startAddress);
  console.log(startAddress);
  firebaseRef.child("endAddress").set(endAddress);
  console.log(endAddress);
  firebaseRef.child("eventName").set(eventName);
  console.log(eventName);
  firebaseRef.child("pickUpAddressOne").set(pickUpAddressOne);
  console.log(pickUpAddressOne);
  firebaseRef.child("pickUpAddressTwo").set(pickUpAddressTwo);
  console.log(pickUpAddressTwo);
}

function loadPlanJourney () {
  window.location.href = "plan-2.html";
}
