import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyC6nlnA2AV3qhb18EqTCuCkrMWT-C_4l4Y",
    authDomain: "whatsapp-next-4d7e8.firebaseapp.com",
    projectId: "whatsapp-next-4d7e8",
    storageBucket: "whatsapp-next-4d7e8.appspot.com",
    messagingSenderId: "526835386610",
    appId: "1:526835386610:web:582b3bbe3b4d859f84286b"
  };
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) :firebase.app()
  const db = app.firestore()
  const auth = app.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  export {db,auth,provider}