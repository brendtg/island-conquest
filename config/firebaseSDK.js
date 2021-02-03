import firebase from 'firebase';

class FirebaseSDK {
  constructor() {
    if (!firebase.apps.length) {
      //avoid re-initializing
      firebase.initializeApp({
        apiKey: 'AIzaSyBMqf3ZzPuqNN88sk1s7fVnO1zaodmdOfo',
        authDomain: 'island-conquest-6b8cc.firebase.com',
        databaseURL: 'https://island-conquest-6b8cc-default-rtdb.firebaseio.com/',
        projectId: 'island-conquest-6b8cc',
        storageBucket: 'island-conquest-6b8cc.appspot.com',
        messagingSenderId: '292954883091'
      });
    }
  }
  login = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };
}
const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;