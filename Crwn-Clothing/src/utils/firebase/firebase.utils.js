    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithRedirect, signInWithPopup, 
    signInWithEmailAndPassword, GoogleAuthProvider, createUserWithEmailAndPassword, 
    onAuthStateChanged, signOut } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc,
    collection, writeBatch, query, getDocs } from 'firebase/firestore'

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    //add objects to collectionref
    //create collectionref
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    //batch allows to attach a bunch of different writes, deletes, sets. only 
    //when we're ready to fire the batch, it does the actual transaction.
    objectsToAdd.forEach((object) => {
        //get docref 
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit(); //fires off the batch
    console.log('done');
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    //generate query off of this collectionref
    const q = query(collectionRef); //gives on object

    //fetch doc snapshots we want
    const querySnapshot = await getDocs(q);
    //querySnapshot.docs() //access different document snapshots 
        //(gives array of all those individual docs inside)
    const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot) => {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    },{})

    return categoryMap;
}

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

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password)
        return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListener = (callback) => 
    onAuthStateChanged(auth, callback);
