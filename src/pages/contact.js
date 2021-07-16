import React from 'react'
import Header from "../components/Header"
import { FirebaseProvider } from '../context/FirebaseContext'
import Auth from '../utils/Auth/Auth'
import Footer from '../components/Footer'


export default function Contact() {

    return (
        <div className='bg-background min-h-screen'>
            <Header />
            <FirebaseProvider>
                <Auth />
            </FirebaseProvider>
            <Footer isPage={true} isContact={true} />
        </div>
    )
}
