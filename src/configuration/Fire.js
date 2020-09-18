import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAEUnM1kzsnPB4Cl-kCYp3jCUuJJDarZlQ",
    authDomain: "mmtrip-92702.firebaseapp.com",
    databaseURL: "https://mmtrip-92702.firebaseio.com",
    projectId: "mmtrip-92702",
    storageBucket: "mmtrip-92702.appspot.com",
    messagingSenderId: "964959228654",
    appId: "1:964959228654:web:a0b198db28f5e731ac59ff",
    measurementId: "G-Q01MB9G99T"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
