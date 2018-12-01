import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBFywbT7cacSLNAiszUq77s54SuuKzUE-o",
    authDomain: "stuco1-f156a.firebaseapp.com",
    databaseURL: "https://stuco1-f156a.firebaseio.com",
    projectId: "stuco1-f156a",
    storageBucket: "stuco1-f156a.appspot.com",
    messagingSenderId: "106157953476"
  };
firebase.initializeApp(config);

export default firebase;
