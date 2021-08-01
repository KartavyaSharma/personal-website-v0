import React from 'react';
import { FirebaseProvider } from './src/context/FirebaseContext';
import { MobileProvider } from './src/context/MobileContext';

export const wrapRootElement = ({ element }): React.ReactNode => {
    return (
        <MobileProvider>
            <FirebaseProvider>
                {element}
            </FirebaseProvider>
        </MobileProvider>
    )
}