import * as React from 'react'

export const MobileContext = React.createContext(null);

export const MobileProvider = ({ children }) => {
    const [isMobile, setIsMobile] = React.useState(null);
    const [isBigScreen, setBigScreen] = React.useState(null);

    React.useEffect(() => {
        if (!isMobile && typeof window !== 'undefined') {
            setIsMobile(window.innerWidth <= 768);
            setBigScreen(window.innerWidth >= 1920);
            const toggleMobile = () => {
                setIsMobile(window.innerWidth <= 768);
                setBigScreen(window.innerWidth >= 1920);
            }
            window.addEventListener('resize', toggleMobile);
            return () => {
                window.removeEventListener('resize', toggleMobile);
            }
        }
    }, [])

    return (
        <MobileContext.Provider value={{mobile: isMobile, bigScreen: isBigScreen}}>
            {children}
        </MobileContext.Provider>
    )
}