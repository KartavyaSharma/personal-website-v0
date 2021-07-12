// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import './firebaseui-styling.global.css'

// Configure Firebase.
const firebaseConfig = {
    apiKey: process.env.GATSBY_FIREBASE_APIKEY,
    authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
    projectId: process.env.GATSBY_FIREBASE_PROJECTID,
    storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.GATSBY_FIREBASE_APPID
};
firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false,
    },
};

function SignInScreen({ getEmail }) {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    if (!isSignedIn) {
        return (
            <div>
                <div className='flex flex-col justify-start items-start'>
                    <div className='font-mono text-xs text-highlight'>Please sign-in to verify your email.</div>
                    <div>
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    </div>
                </div>
            </div>
        );
    }
    getEmail(firebase.auth().currentUser.email);
    return (
        <div>
            <div className='font-mono text-xs text-highlight'>Hey {firebase.auth().currentUser.displayName}! You are now signed-in!</div>
            <button onClick={() => firebase.auth().signOut()} className='hover:bg-background border border-background rounded-md text-white outline-none focus:shadow-outline focus:outline-none font-bold py-2 px-6'>
                Sign Out
            </button>
        </div>
    );
}

export default SignInScreen;
