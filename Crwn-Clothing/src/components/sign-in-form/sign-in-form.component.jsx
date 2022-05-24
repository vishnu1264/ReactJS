import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, 
    signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email : '',
    password : '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    // console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async() => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        }
        catch(error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(error);
            }
            // if(error.code === 'auth/wrong-password'){
            //     alert('Incorrect password for email');
            // }
            // else if(error.code === 'auth/user-not-found')

            console.log(error);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]:value });
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' onChange={handleChange} name='email' value={email} required/>
                <FormInput label='Password' type='password' onChange={handleChange} name='password' value={password} required/>

            <div className="buttons-container">
                <Button type='submit'>Sign In</Button>
                <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
            </div>
                
            </form>
        </div>
    )
}

export default SignInForm;
