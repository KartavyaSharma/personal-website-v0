import React from 'react'
import firebase from 'firebase';
import withFirebaseAuth from 'react-with-firebase-auth';

import ContactForm from '../../components/ContactForm'

// Configure Firebase.
const firebaseConfig = {
    apiKey: process.env.GATSBY_FIREBASE_APIKEY,
    authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
    projectId: process.env.GATSBY_FIREBASE_PROJECTID,
    storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.GATSBY_FIREBASE_APPID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

function Auth({ user, error, loading, setError, signOut, signInWithGoogle, signInWithGithub, signInWithFacebook }) {
    return (
        <div className="p-5 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto">
            <div className="text-center mb-10" data-sal="slide-right" data-sal-easing="ease" data-sal-duration="1000">
                <p className="mt-10 md:mt-4 text-base text-gray-200 font-regular uppercase">
                    Contact
                </p>
                <div className="text-5xl leading-normal font-extrabold tracking-tight text-gray-100">
                    Let's Get In <span className="text-highlight">Touch</span>!
                </div>
            </div>
            {
                user ? (
                    <div>
                        <ContactForm user_name={user.displayName} user_mail={user} sign_out={signOut} />
                    </div>
                ) : (
                    <div className="flex items-center justify-center">
                        <div className=" bg-hover-bg rounded-lg shadow-lg p-7 lg:p-9 flex flex-col lg:w-2/5 lg:items-center lg:justify-center" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
                            <div className='text-2xl font-semibold text-highlight'>Sign in</div>
                            <div className='mt-3 text-white font-blogBody'>
                                Signing in allows us to verify your email before we move forward. This way we can ensure that we are talking to a real person.
                            </div>
                            <div className='mt-5 flex flex-col lg:flex-row lg:items-center w-full justify-start'>
                                <button 
                                    className='px-3 py-2 flex flex-row bg-background rounded-xl shadow-lg ring'
                                    onClick={signInWithGoogle}
                                >
                                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                        <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                                            <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                                            <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                                            <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                                            <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                                        </g>
                                    </svg>
                                    <div className='ml-3 text-white font-semibold'>
                                        Login with Google
                                    </div>
                                </button>
                                <button className='px-3 py-2 flex flex-row items-center bg-background rounded-xl shadow-lg ring mt-4 lg:ml-4 lg:mt-0 hidden'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" className='fill-blue'>
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                    </svg>
                                    <div className='ml-3 text-white'>
                                        Login with Facebook
                                    </div>
                                </button>
                                <button 
                                    className='px-3 py-2 flex flex-row items-center bg-background rounded-xl shadow-lg ring mt-4 lg:ml-4 lg:mt-0'
                                    onClick={signInWithGithub}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                    <div className='ml-3 text-white font-semibold'>
                                        Login with Github
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
    githubProvider: new firebase.auth.GithubAuthProvider(),
}

export default withFirebaseAuth({ providers, firebaseAppAuth })(Auth);