import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCt9RcKbAO68hz-cTZyX_2n8baBB7hwiOM",
  authDomain: "project-71-e52da.firebaseapp.com",
  projectId: "project-71-e52da",
  storageBucket: "project-71-e52da.appspot.com",
  messagingSenderId: "675280296893",
  appId: "1:675280296893:web:92c34441d2ee986f6510d4"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
