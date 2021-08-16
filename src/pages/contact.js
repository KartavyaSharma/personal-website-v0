import React from 'react'
import Header from "../components/Header"
import Auth from '../utils/Auth/Auth'
import Footer from '../components/Footer'
import SEO from '../components/SEO'


export default function Contact() {
    return (
        <div className='bg-background min-h-screen'>
            <SEO title="Kartavya Sharma" page='Contact'/>
            <Header />
                <Auth />
            <Footer isPage={true} isContact={true} />
        </div>
    )
}
