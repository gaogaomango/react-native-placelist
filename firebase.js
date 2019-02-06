import Config from "react-native-config";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: Config.REACT_APP_API_KEY,
  authDomain: Config.REACT_APP_AUTH_DOMAIN,
  databaseURL: Config.REACT_APP_DATABASE_URL,
  projectId: Config.REACT_APP_PROJECT_ID,
  storageBucket: Config.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: Config.REACT_APP_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

export default firebase;
