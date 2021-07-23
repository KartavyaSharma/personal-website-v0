import * as React from 'react'

export const MobileContext = React.createContext<{ small: boolean | null, medium: boolean | null, big: boolean | null }>(null);

export const MobileProvider = ({ children }): React.ReactNode => {
    const [isMobile, setIsMobile] = React.useState<boolean | null>(null);
    const [isMedScreen, setMedScreen] = React.useState<boolean | null>(null);
    const [isBigScreen, setBigScreen] = React.useState<boolean | null>(null);

    React.useEffect(() => {
        if (!isMobile && typeof window !== 'undefined') {
            setIsMobile(window.innerWidth <= 768);
            setMedScreen(window.innerWidth <= 1024);
            setBigScreen(window.innerWidth >= 1920);
            const toggleMobile = () => {
                setIsMobile(window.innerWidth <= 768);
                setMedScreen(window.innerWidth <= 1024);
                setBigScreen(window.innerWidth >= 1920);
            }
            window.addEventListener('resize', toggleMobile);
            return () => {
                window.removeEventListener('resize', toggleMobile);
            }
        }
    }, [])

    return (
        <MobileContext.Provider value={{small: isMobile, medium: isMedScreen, big: isBigScreen}}>
            {children}
        </MobileContext.Provider>
    )
}