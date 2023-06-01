var firebaseConfig = {
    apiKey: "AIzaSyC8VcvVaPVyH-rZ33akT1PBmpNNClZwL-M",
    authDomain: "blogging-website-b2cf4.firebaseapp.com",
    databaseURL: "https://blogging-website-b2cf4-default-rtdb.firebaseio.com",
    projectId: "blogging-website-b2cf4",
    storageBucket: "blogging-website-b2cf4.appspot.com",
    messagingSenderId: "231758418404",
    appId: "1:231758418404:web:4f793153ad1043e2b537f1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  // let's code
  var datab = firebase.database().ref("data");
  function UserRegister() {
    var email = document.getElementById("eemail").value;
    var password = document.getElementById("lpassword").value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {})
      .catch(function (error) {
        var errorcode = error.code;
        var errormsg = error.message;
      });
  }
  const auth = firebase.auth();
  // function SignIn() {
  //   var email = document.getElementById("eemail").value;
  //   var password = document.getElementById("lpassword").value;
  //   const promise = auth.signInWithEmailAndPassword(email, password);
  //   promise.catch((e) => alert(e.msg));
  //   window.open("editor.html", "_self");
  // }
  function SignIn() {
    var email = document.getElementById("eemail").value;
    var password = document.getElementById("lpassword").value;
  
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise
    .then(() => {
      // Successful sign-in
      window.open("editor.html", "_self");
    })
    .catch((error) => {
      // Failed sign-in
      alert("Incorrect email or password");
      console.log(error.message);
    });
  }
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
      name: getId("fname"),
      email: getId("eemail"),
      password: getId("lpassword"),
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById("form").reset();
  });
  function getId(id) {
    return document.getElementById(id).value;
  }
  
  
  
  