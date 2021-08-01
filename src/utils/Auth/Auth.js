import React, { useContext } from 'react'
import { getAuth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { MobileContext } from '../../context/MobileContext';
import { useFirebaseApp } from '../../hooks/useFirebase';
import ContactForm from '../../components/ContactForm'


const Auth = () => {
    
    useFirebaseApp();
    const [isSigningIn, setIsSigningIn] = React.useState(null);
    const [signedIn, setSignedIn] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [user, setUser] = React.useState(null);

    const { small } = useContext(MobileContext);
    const isMobile = small;

    const handleSignInWithGoogle = () => {
        setIsSigningIn(true);
        setError(null);
        const auth = getAuth()
        signInWithPopup(auth, new GoogleAuthProvider())
        .then((result) => {
            const user = result.user;
            setUser(user);
            setIsSigningIn(false);
            setSignedIn(true);
        })
        .catch(e => {
            setIsSigningIn(false);
            setError(e);
        })
    }

    const handleSignInWithGithub = () => {
        setIsSigningIn(true);
        setError(null);
        const auth = getAuth()
        signInWithPopup(auth, new GithubAuthProvider())
        .then((result) => {
            const user = result.user;
            setUser(user);
            setIsSigningIn(false);
            setSignedIn(true);
        })
        .catch(e => {
            setIsSigningIn(false);
            setError(e);
        })
    }

    const handleSignInWithFacebook = () => {
        setIsSigningIn(true);
        setError(null);
        const auth = getAuth()
        signInWithPopup(auth, new FacebookAuthProvider())
        .then((result) => {
            const user = result.user;
            setUser(user);
            setIsSigningIn(false);
            setSignedIn(true);
        })
        .catch(e => {
            setIsSigningIn(false);
            setError(e);
        })
    }

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
                signedIn && isSigningIn === false ? (
                    <ContactForm user_email={user.email} user_name={user.displayName}/>
                ) : (
                    <div className="flex items-center justify-center">
                        <div className=" bg-hover-bg rounded-lg shadow-lg p-7 lg:p-9 flex flex-col lg:w-1/2 lg:items-center lg:justify-center" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
                            <div className='text-2xl font-semibold text-highlight text-center'>Sign in</div>
                            <div className='mt-3 text-white font-blogBody text-center'>
                                Please sign-in to verify your email. Robots aren't particulary fun to talk with, and neither are imposters. Don't be sus.
                            </div>
                            <div className='text-xs text-white text-opacity-80 italic mt-4'>Your email is only used for verification purposes</div>
                            <div className='mt-5 flex flex-col lg:flex-row lg:items-center w-full justify-center'>
                                <button 
                                    className='px-3 py-2 flex flex-row bg-background rounded-xl shadow-lg ring outline-none items-center justify-center'
                                    onClick={handleSignInWithGoogle}
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
                                { !isMobile ? (
                                        <button 
                                            className='px-3 py-2 flex flex-row items-center bg-background rounded-xl shadow-lg ring mt-4 lg:ml-4 lg:mt-0 outline-none justify-center'
                                            onClick={handleSignInWithGithub}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                            <div className='ml-3 text-white font-semibold'>
                                                Login with Github
                                            </div>
                                        </button>
                                    ) : (
                                        <button
                                            className='px-3 py-2 flex flex-row items-center bg-background rounded-xl shadow-lg ring mt-4 lg:ml-4 lg:mt-0 outline-none justify-center'
                                            onClick={handleSignInWithFacebook}                                   
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-facebook" viewBox="0 0 16 16" className='fill-blue'>
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                            </svg>
                                            <div className='ml-3 text-white font-semibold'>
                                                Login with Facebook
                                            </div>
                                        </button>
                                    )
                                }
                            </div>
                            {
                                error !== null ? (
                                    <div className='text-red-500 italic text-xs mt-3 w-full text-center font-semibold'>Sign in failed, please try again.</div>
                                ) : (null)
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Auth;