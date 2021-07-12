//auth utility for contact form email verification
import firebase from 'firebase/app';
import 'firebase/auth'

function googleProvider() {
    //creating a new provider
    var provider = new firebase.auth.GoogleAuthProvider();

    //create scopes (a.k.a permissions)
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    //custom parameters with OAuth request
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });

    return provider;

}

function googleSignInPopup() {
    firebase.auth()
        .signInWithPopup(googleProvider())
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // Gives a Google Access Token. Use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        })
}

function googleSignInRedirectResult() {
    firebase.auth()
        .getRedirectResult(googleProvider())
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // Gives a Google Access Token. Use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        })
}