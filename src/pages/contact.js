import React from 'react'
import { Link } from 'gatsby'

import Header from "../components/Header"

export default class Contact extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    };

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    validate = () => {
        let isError = false;
        const errors = {
            firstNameError: "",
            lastNameError: "",
            emailError:  "",
            messageError: "",
        };

        if(this.state.firstName.length < 3) {
            isError = true;
            errors.firstNameError = "Field input should be longer than 3";
        }

        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };

    onSubmit = () => {
        const err = this.validate();
        if(!err) {
            document.contactForm.action = "https://api.web3forms.com/submit";
            document.contactForm.method = "POST";
            return false;
        } else {
            alert("Incomplete form!");
        }
    }

    render() {
        return (
            <div className='bg-trueGray-900'>
                <Header />
                <div className="p-5 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto font-mono" data-sal="zoom-out" data-sal-easing="ease" data-sal-duration="1000">
                    <div className="text-center mb-16">
                        <p className="mt-4 text-base leading-7 text-gray-200 font-regular uppercase">
                            Contact
                        </p>
                        <h3 className="text-5xl leading-normal font-extrabold tracking-tight text-gray-100">
                            Let's Get In <span className="text-orange-500">Touch</span>!
                        </h3>
                    </div>
                    <form className="w-full" autoComplete="new-password" name="contactForm">
                        <input type="hidden" name="apikey" value="f5c68998-5d13-4604-b787-dbaf32f95af4"/>
                        <input type="checkbox" name="botcheck" id="" className='hidden'></input>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input
                                    type="text" name="firstName" placeholder="Jane" value={this.state.firstName} onChange={e => this.change(e)} autoComplete="new-password"
                                    className={`appearance-none bg-transparent border-b ${this.validate ? "" : ""} w-full text-gray-50 mr-3 p-4 leading-tight focus:outline-none focus:bg-trueGray-800`}
                                    requried />
                                {/* {this.validate ? <p className="text-red-500 text-xs italic mt-1">Please fill out this field.</p> : null} */}
                                
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input
                                    type="text" name="lastName" placeholder="Doe" value={this.state.lastName} onChange={e => this.change(e)} autoComplete="new-password"
                                    className="appearance-none bg-transparent border-b border-trueGray-200 w-full text-gray-50 mr-3 p-4 leading-tight focus:outline-none focus:bg-trueGray-800" 
                                    requried />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-2" for="grid-password">
                                    Email Address
                                </label>
                                <input
                                    type="email" name="email" placeholder="janedoe@youremail.com" value={this.state.email} onChange={e => this.change(e)} autoComplete="new-password"
                                    className="appearance-none bg-transparent border-b border-trueGray-200 w-full text-gray-50 mr-3 p-4 leading-tight focus:outline-none focus:bg-trueGray-800" 
                                    requried />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-2" for="grid-password">
                                    Your Message
                                </label>
                                <textarea 
                                    rows="10" type="message" name="message" placeholder="Looking forward to hearing from you!" value={this.state.message} onChange={e => this.setState({ message: e.target.value })} autoComplete="new-password"
                                    className="appearance-none bg-transparent border-b border-trueGray-200 w-full text-gray-50 mr-3 p-4 focus:bg-trueGray-800 leading-tight focus:outline-none" 
                                    requried>

                                </textarea>
                            </div>
                            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                            <div className="flex justify-between w-full px-3 py-4">
                                <button 
                                    type="submit"
                                    onClick={this.onSubmit}
                                    className="shadow bg-orange-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='font-mono pt-20'>
                    <div className="h-1/2 overflow-hidden flex items-center justify-center">
                        <div className="w-full flex items-center justify-center">
                            <div className="w-full px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 mx-auto max-w-screen-2xl text-white flex flex-col">
                                <div className="flex flex-col">
                                    <div className="flex mt-24 mb-12 flex-row justify-between">
                                        <div>
                                            <Link activeClass="active" to="/" spy={true} smooth={true} duration={500} className="cursor-pointer text-orange-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16" className='hover:text-white'>
                                                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <Link activeClass="active" to="/#home" spy={true} smooth={true} duration={500} className="hidden md:block cursor-pointer text-gray-400 hover:text-orange-500 uppercase">Home</Link>
                                        <Link activeClass="active" to="/#about-me" spy={true} smooth={true} duration={500} className="hidden md:block cursor-pointer text-gray-400 hover:text-orange-500 uppercase">About</Link>
                                        <Link activeClass="active" to="/#projects" spy={true} smooth={true} duration={500} className="hidden md:block cursor-pointer text-gray-400 hover:text-orange-500 uppercase">Projects</Link>
                                        <Link activeClass="active" to="/#blog" spy={true} smooth={true} duration={500} className="hidden md:block cursor-pointer text-gray-400 hover:text-orange-500 uppercase">Blog</Link>
                                        <div className="flex flex-row space-x-8 items-center justify-between">
                                            <a href='https://github.com/KartavyaSharma' target="_blank" rel="noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-github" viewBox="0 0 16 16" className='hover:fill-orange'>
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                                </svg>
                                            </a>
                                            <a href='mailto:kartavya@berkeley.edu'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-envelope-fill" viewBox="0 0 16 16" className='hover:fill-orange'>
                                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                                </svg>
                                            </a>
                                            <a href='https://www.linkedin.com/in/kartavya-sharma/' target="_blank" rel="noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16" className='hover:fill-orange'>
                                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <hr className="border-orange-500" />
                                    <div className="w-full text-center my-12 text-trueGray-400">This site was made using <a href='https://www.gatsbyjs.com/' rel="noreferrer" target="_blank" className='underline hover:text-orange-500'>Gatsby.js</a>, <a href='https://tailwindcss.com/' rel="noreferrer" target="_blank" className='underline hover:text-orange-500'>Tailwind CSS</a>, and <a href='https://forestry.io/' rel="noreferrer" target="_blank" className='underline hover:text-orange-500'>Forestry</a>. View <a href='https://github.com/KartavyaSharma/personal-website' rel="noreferrer" target="_blank" className='hover:text-orange-500 cursor-pointer'> <span className='underline'>Source Code</span></a> on Github</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
