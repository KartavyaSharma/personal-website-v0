import React from 'react'
import Header from "../components/Header"
import Loadable from "@loadable/component"
import Footer from '../components/Footer'

const LoadableAuth = Loadable(() => import("../utils/Auth/Auth"))

export default function Contact() {
    return (
        <div className='bg-background min-h-screen'>
            <Header />
            <LoadableAuth />
            <Footer isPage={true} isContact={true} />
        </div>
    )
}
