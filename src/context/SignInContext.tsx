import React, { createContext, useState } from 'react';

export const SignInContext = createContext<{ 
    signInState: boolean,
    firebaseUserInfoState: object | null,
    changeFunction: (setValue: boolean, setUserInfo: object | null) => void | null }>({ signInState: false, firebaseUserInfoState: null, changeFunction: null });

export const SignInProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [firebaseUserInfo, setFirebaseUserInfo] = useState<object | null>(null);

    console.log(isSignedIn);

    return (
        <SignInContext.Provider value={{ signInState: isSignedIn, firebaseUserInfoState: firebaseUserInfo, changeFunction: (setValue: boolean, setUserInfo: object | null) => {
            setIsSignedIn(setValue)
            setFirebaseUserInfo(setUserInfo)
        }}}>
            {children}
        </SignInContext.Provider>
    )
}