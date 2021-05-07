import React from 'react'
import { useFormik } from 'formik'

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

    if(!values.email) {
        errors.email = "Email is required";
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
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
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div
            className="p-5 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto font-mono"
            data-sal="zoom-out"
            data-sal-easing="ease"
            data-sal-duration="1000"
        >
            <div className="text-center mb-16">
                <p className="mt-10 md:mt-4 text-base leading-7 text-gray-200 font-regular uppercase">
                    Contact
                </p>
                <div className="text-5xl leading-normal font-extrabold tracking-tight text-gray-100">
                    Let's Get In <span className="text-orange-500">Touch</span>!
                </div>
            </div>
            <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="w-full"
                autoComplete="new-password"
            >
                <input type="hidden" name="apikey" value="f5c68998-5d13-4604-b787-dbaf32f95af4"/>
                <input type="hidden" name="subject" value="New Submission from Web3Forms"/>
                <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
                <input type="checkbox" name="botcheck" id="" className="hidden"/>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            htmlFor='firstName'
                            className="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-2"
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
                            className={`appearance-none bg-transparent border-b w-full text-gray-50 mr-3 p-4 leading-tight focus:outline-none focus:bg-trueGray-800 
                                ${ formik.touched.firstName && formik.errors.firstName ? ('border-red-500') : 'border-white' }`}
                            placeholder="Jane"
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="text-red-500 text-xs italic mt-1">{formik.errors.firstName}</div>
                        ) : null}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            htmlFor='lastName'
                            className="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-2"
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
                            className={`appearance-none bg-transparent border-b w-full text-gray-50 mr-3 p-4 leading-tight focus:outline-none focus:bg-trueGray-800
                                ${ formik.touched.lastName && formik.errors.lastName ? ('border-red-500') : 'border-white' }`}
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
                            className="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-2" 
                            for="grid-password"
                        >
                            Email Address
                        </label>
                        <input 
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className={`appearance-none bg-transparent border-b w-full text-gray-50 mr-3 p-4 leading-tight focus:outline-none focus:bg-trueGray-800
                                ${ formik.touched.email && formik.errors.email ? ('border-red-500') : 'border-white' }`}
                            placeholder="janedoe@example.com"
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-xs italic mt-1">{formik.errors.email}</div>
                        ) : null}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            htmlFor='message'
                            className="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-2"
                            for="grid-password"
                        >
                            Your Message
                        </label>
                        <textarea
                            rows="10"
                            id="message"
                            name="message"
                            type="message"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                            className={`appearance-none bg-transparent border-b w-full text-gray-50 mr-3 p-4 focus:bg-trueGray-800 leading-tight focus:outline-none
                                ${ formik.touched.message && formik.errors.message ? ('border-red-500') : 'border-white' }`}
                            placeholder="Looking forward to hearing from you!"
                        >
                        </textarea>
                        {formik.touched.message && formik.errors.message ? (
                            <div className="text-red-500 text-xs italic mt-1">{formik.errors.message}</div>
                        ) : null}
                    </div>
                </div>
                <button
                    disabled={!(formik.isValid && formik.dirty)}
                    type="submit"
                    className={`shadow bg-orange-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded
                        ${ !(formik.isValid && formik.dirty) ? 'disabled:opacity-50 disabled:cursor-not-allowed' : '' }`}
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactFields
