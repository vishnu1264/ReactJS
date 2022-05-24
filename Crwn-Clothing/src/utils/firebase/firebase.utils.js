    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithRedirect, signInWithPopup, 
    GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8DHr6qlgz2y1ZwPD42YWymeKfZegQ9IY",
  authDomain: "crwn-clothing-db-1ffce.firebaseapp.com",
  projectId: "crwn-clothing-db-1ffce",
  storageBucket: "crwn-clothing-db-1ffce.appspot.com",
  messagingSenderId: "194341660623",
  appId: "1:194341660623:web:17f3e1993246fea33854ba"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

//everytime somebody interacts with our provider, we always force them to select an account
googleProvider.setCustomParameters({
    prompt: "select_account"
});

//auth keeps track of authentications that are happening
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore(); //points to firestore database

export const createUserDocumentFromAuth = 
    async (userAuth, additionalInformation = {displayName:'vishnu'}) => {
    if(!userAuth) return;

    // doc reference inside db under users collection with this userAuth's uid (unique)
    const userDocRef = doc(db, 'users', userAuth.uid);

    // returns an object that represents some doc reference in the db
    // console.log(userDocRef);

    // points to doc, allows to check if instance of that exists in db, allows to access the data.
    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot);

    // tells if inside db, does the data related to reference exists
    // console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }
        catch(error){
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password)
        return;
    return await createUserWithEmailAndPassword(auth, email, password);
}
