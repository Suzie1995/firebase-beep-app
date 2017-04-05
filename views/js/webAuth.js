(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA47PFbXllb4teaat_10j6FnVOKzK8SWB4",
    authDomain: "beep-app-1484774811866.firebaseapp.com",
    databaseURL: "https://beep-app-1484774811866.firebaseio.com",
    storageBucket: "beep-app-1484774811866.appspot.com",
    // messagingSenderId: "946101429046"
  };
  firebase.initializeApp(config);

  var txtEmail = document.getElementById("txtEmail");
  var txtName = document.getElementById("txtName");
  var txtPassword = document.getElementById("txtPassword");
  var btnSignUp = document.getElementById("btnSignUp");
  var btnLogin = document.getElementById("btnLogin");

  //Add login event
  $( "#btnLogin" ).click(function() {
    //Get email and pass
    var email = txtEmail.value;
    var pass = txtPassword.value;
    var auth = firebase.auth();
    //Sign In
    var promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  //Add Signup event
  $( "#btnSignUp" ).click(function() {

    //Get email and pass
    var email = txtEmail.value;
    var pass = txtPassword.value;
    var auth = firebase.auth();
    //Sign In
    var promise = auth.createUserWithEmailAndPassword(email, pass);
    promise
    .catch(e => console.log(e.message));

  });

  //Add a realtime listner
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
    } else {
      console.log("not logged in");
    }

  });

}());
