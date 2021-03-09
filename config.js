import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyArHlBNDQOX83EywWyzuQ6gPnX3Wo6r1Fk",
    authDomain: "newsletter-6035e.firebaseapp.com",
    databaseURL: "https://newsletter-6035e.firebaseio.com",
    projectId: "newsletter-6035e",
    storageBucket: "newsletter-6035e.appspot.com",
    messagingSenderId: "110012888014",
    appId: "1:110012888014:web:6bd9344a0631a13fbff19f"
  };
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  

  export default firebase.database()