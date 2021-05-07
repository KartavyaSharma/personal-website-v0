import React from 'react'

import Header from "../components/Header"
import ContactForm from "../components/ContactForm"
import Footer from '../components/Footer'

export default class Contact extends React.Component {

    render() {
        return (
            <div className='bg-trueGray-900'>
                <Header />
                <ContactForm />
                <Footer isPage={true} isContact={true} />
            </div>
        );
    }
}
