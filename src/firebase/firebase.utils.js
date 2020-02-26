import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBSjwLnkarfuT5S5e2nn6QljFIuEhlPq7g",
  authDomain: "kings-clothing.firebaseapp.com",
  databaseURL: "https://kings-clothing.firebaseio.com",
  projectId: "kings-clothing",
  storageBucket: "kings-clothing.appspot.com",
  messagingSenderId: "912654018757",
  appId: "1:912654018757:web:26529bf86f0bb3ce5528ac",
  measurementId: "G-S0E0VQZSHL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if(!userAuth) {
     return ;
   }

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapshot = await userRef.get();


   if(!snapshot.exists) {
     const { displayName, email } = userAuth;
     const createdAt = new Date();

     try{
await userRef.set({
  displayName,
  email,
  createdAt,
  ...additionalData
})
     }
     catch(err){
  console.log(err.message);
     }
   }
   return userRef
}

export default firebase