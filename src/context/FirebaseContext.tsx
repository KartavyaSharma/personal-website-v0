import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import * as React from 'react';
import { createContext } from 'react';

export const FirebaseAppContext = createContext<FirebaseApp>(null);

const firebaseConfig = {
    apiKey: process.env.GATSBY_FIREBASE_APIKEY,
    authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
    projectId: process.env.GATSBY_FIREBASE_PROJECTID,
    storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.GATSBY_FIREBASE_APPID
};

export const FirebaseProvider = ({ children }) => {
    const [firebaseApp, setFirebaseApp] = React.useState<FirebaseApp>(null);

    React.useEffect(() => {
        if (!firebaseApp && typeof window !== 'undefined') {
            const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
            setFirebaseApp(firebaseApp);
        }
    }, []);

    return (
        <FirebaseAppContext.Provider value={firebaseApp}>
            {children}
        </FirebaseAppContext.Provider>
    )
}