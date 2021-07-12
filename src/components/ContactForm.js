import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'

import Auth from './Auth/Auth'

const validate = (values) => {
    const errors = {};
    if(values.firstName[0] === " ") {
        errors.firstName = "Invalid field entry"
    } else if(!/^[A-Za-z][A-Za-z'-]+([A-Za-z][A-Za-z'-]+)*/.test(values.firstName)) {
        errors.firstName = "Invalid field entry";
    } else if(values.firstName.length < 3) {
        errors.firstName = "Must be greater than 3 characters";
    }

    if(values.lastName[0] === " ") {
        errors.lastName = "Invalid field entry"
    } else if(!/^[A-Za-z][A-Za-z'-]+([A-Za-z][A-Za-z'-]+)*/.test(values.lastName)) {
        errors.lastName = "Invalid field entry";
    } else if(values.lastName.length < 3) {
        errors.lastName = "Must be greater than 3 characters";
    }   

    if(values.message[0] === " ") {
        errors.message = "Invalid field entry"
    } else if(!values.message) {
        errors.message = "Message is required";
    } else if(values.message.length < 10) {
        errors.message = "Message must be greater than 10 characters"
    }

    return errors;
}

function ContactFields(props) {

    const [isMobile, setIsMobile] = useState(undefined);
    const [email, setEmail] = useState('undefined');

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768)
        const changeMenu = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener('resize', changeMenu);

        return () => {
            window.removeEventListener('resize', changeMenu);
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            message: "",
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div
            className="p-5 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto font-mon"
            
        >
            <div className="text-center mb-16" data-sal="slide-right" data-sal-easing="ease" data-sal-duration="1000">
                <p className="mt-10 md:mt-4 text-base leading-7 text-gray-200 font-regular uppercase">
                    Contact
                </p>
                <div className="text-5xl leading-normal font-extrabold tracking-tight text-gray-100">
                    Let's Get In <span className="text-highlight">Touch</span>!
                </div>
            </div>
            <form
                action="https://kartavyas-backend.herokuapp.com/mail/handler"
                method="POST"
                className="w-full bg-hover-bg rounded-lg shadow-lg p-10"
                autoComplete="new-password"
                data-sal="zoom-out"
                data-sal-easing="ease"
                data-sal-duration="1000"
            >
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            htmlFor='firstName'
                            className="block uppercase tracking-wide text-highlight text-xs font-bold mb-2"
                            for="grid-first-name"
                        >
                            First Name
                        </label>
                        <input 
                            id="firstName"
                            name="firstName"
                            type="text"
                            autoComplete="new-password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            className={`appearance-none bg-transparent border-b w-full text-gray-50 mr-3 p-4 leading-tight focus:outline-none focus:bg-hover-bg 
                                ${ formik.touched.firstName && formik.errors.firstName ? ('border-red-500') : 'border-highlight' }`}
                            placeholder="Jane"
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="text-red-500 text-xs italic mt-1">{formik.errors.firstName}</div>
                        ) : null}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            htmlFor='lastName'
                            className="block uppercase tracking-wide text-highlight text-xs font-bold mb-2"
                            for="grid-last-name"
                        >
                            Last Name
                        </label>
                        <input 
                            id="lastName"
                            name="lastName"
                            type="text"
                            autoComplete="new-password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            className={`appearance-none bg-transparent border-b w-full text-gray-50 mr-3 p-4 leading-tight focus:outline-none focus:bg-hover-bg
                                ${ formik.touched.lastName && formik.errors.lastName ? ('border-red-500') : 'border-highlight' }`}
                            placeholder="Doe"
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className="text-red-500 text-xs italic mt-1">{formik.errors.lastName}</div>
                        ) : null}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            htmlFor='email' 
                            className="block uppercase tracking-wide text-highlight text-xs font-bold mb-2" 
                            for="grid-password"
                        >
                            Email Address
                        </label>
                        <input 
                            name="email"
                            type="email"
                            value={email}
                            className='hidden'
                        />
                        <Auth getEmail = {(userEmail) => {
                            setEmail(userEmail)
                        }}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            htmlFor='message'
                            className="block uppercase tracking-wide text-highlight text-xs font-bold mb-2"
                            for="grid-password"
                        >
                            Your Message
                        </label>
                        <textarea
                            rows={`${isMobile ? 5 : 10}`}
                            id="message"
                            name="message"
                            type="message"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                            className={`appearance-none bg-transparent border-b w-full text-gray-50 mr-3 p-4 focus:bg-hover-bg leading-tight focus:outline-none
                                ${ formik.touched.message && formik.errors.message ? ('border-red-500') : 'border-highlight' }`}
                            placeholder="Looking forward to hearing from you!"
                        >
                        </textarea>
                        {formik.touched.message && formik.errors.message ? (
                            <div className="text-red-500 text-xs italic mt-1">{formik.errors.message}</div>
                        ) : null}
                    </div>
                </div>
                <button
                    disabled={!(formik.isValid && email!=='undefined')}
                    type="submit"
                    className={`hover:bg-background border border-background rounded-md text-white outline-none focus:shadow-outline focus:outline-none font-bold py-2 px-6
                        ${ !(formik.isValid && email!=='undefined') ? 'disabled:opacity-50 disabled:cursor-not-allowed pointer-events-none' : '' }`}
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactFields
