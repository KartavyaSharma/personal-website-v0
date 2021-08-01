import React from 'react';
import { FirebaseProvider } from './src/context/FirebaseContext';
import { MobileProvider } from './src/context/MobileContext';
import { SignInProvider } from './src/context/SignInContext'

export const wrapRootElement = ({ element }): React.ReactNode => {
    return (
        <SignInProvider>
            <MobileProvider>
                <FirebaseProvider>
                    {element}
                </FirebaseProvider>
            </MobileProvider>
        </SignInProvider>
    )
}