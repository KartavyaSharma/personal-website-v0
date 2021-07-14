import React from 'react'

import Header from "../components/Header"
import loadable from "@loadable/component"
import Footer from '../components/Footer'

const LoadableAuth = loadable(() => import('../utils/Auth/Auth'))

export default class Contact extends React.Component {

    render() {
        return (
            <div className='bg-background min-h-screen'>
                <Header />
                <LoadableAuth />
                <Footer isPage={true} isContact={true} />
            </div>
        );
    }
}
