import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgooBJ0y2oE7AQNmWoIVGt_FYkI8i7LjI",
  authDomain: "crwn-clothing-db-c097e.firebaseapp.com",
  projectId: "crwn-clothing-db-c097e",
  storageBucket: "crwn-clothing-db-c097e.appspot.com",
  messagingSenderId: "853263298471",
  appId: "1:853263298471:web:4b4f4f97c2faf76f8bd082"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

