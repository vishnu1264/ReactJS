// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

// import { 
//     //auth, 
//     signInWithGooglePopup, 
//     createUserDocumentFromAuth, 
//     //signInWithGoogleRedirect 
// } 
//     from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () => {

    //On mount this runs once
    // useEffect(async () => {
    //     //gets response for the redirect just happened (using auth)
    //     const response = await getRedirectResult(auth);
    //     console.log(response);
    // }, [])

    // const logGoogleUser = async() => {
    //     const {user} = await signInWithGooglePopup();
    //     const userDocRef = await createUserDocumentFromAuth(user);
    //     console.log(user); //User crendentials (Includes Acsess token for CRUD reqs included)
    // }

    // const logGoogleRedirectUser =  async() => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user});
    // }

    return(
        <div className='authentication-container'>
            {/* <h1>Sign In page</h1> */}
            {/* <button onClick={logGoogleUser} > Sign In with Google Popup </button> */}
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign In with Google Redirect
            </button> */}
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;
