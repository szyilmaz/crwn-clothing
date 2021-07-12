import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCMjGR73JYlms6yqSQc32aN0GpFlC6U8EY",
    authDomain: "crwn-db-d80e4.firebaseapp.com",
    projectId: "crwn-db-d80e4",
    storageBucket: "crwn-db-d80e4.appspot.com",
    messagingSenderId: "186373665751",
    appId: "1:186373665751:web:c1bc1548a2b5c9bcd8d192",
    measurementId: "G-34RSPZ0JRZ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return; 

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;

}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }else {
    firebase.app(); // if already initialized, use that one
  }

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;