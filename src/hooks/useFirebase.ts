import { FirebaseApp } from 'firebase/app';
import * as React from 'react';
import { FirebaseAppContext } from '../context/FirebaseContext';

export function useFirebaseApp(
    fn: (firebaseApp: FirebaseApp) => void | undefined = null
): FirebaseApp {
    const firebaseApp = React.useContext(FirebaseAppContext);

    if(fn == null) return firebaseApp;

    React.useEffect(() => {
        if (!firebaseApp) {
            return ;
        }
        return fn(firebaseApp);
    }, [firebaseApp])
}