var firebaseConfig = {
  apiKey: "AIzaSyC4aIuNlr8lIpYmfQ_TlT5hlMAs4HHRklU",
  authDomain: "remote-control-c0e4c.firebaseapp.com",
  databaseURL: "https://remote-control-c0e4c.firebaseio.com",
  projectId: "remote-control-c0e4c",
  storageBucket: "remote-control-c0e4c.appspot.com",
  messagingSenderId: "300486725391",
  appId: "1:300486725391:web:1e2b92a2e3b5f66946387a",
  measurementId: "G-RKLV5F3LD7"
};
firebase.initializeApp(firebaseConfig);


var vRef = firebase.database().ref('Mecanum_Wheels_Robot/videoRequestFlag');

vRef.on('value', function(snapshot) {
  if(snapshot.val()=="1" && window.location.href.indexOf("caller.html")==-1)
    window.location.href="./caller.html";
  else if(snapshot.val()!="1" && window.location.href.indexOf("caller.html")!=-1)
    window.history.back();
});