import React from 'react'

import Myself from '../images/myself.jpg'

function aboutme(props) {
    return (
        <div className={props.header} id="about-me">
            <div className='flex flex-row'>
                <div className={props.topNum}>01</div>
                <div className={props.topTitle}>About me</div>
            </div>
            <div className='flex flex-row'>
                <div className={`pl-11 ${props.body}`}>
                    Hullo.
                </div>
                <img className='h-64 w-64 rounded-full my-4' src={Myself} alt='' />
            </div>
        </div>
    )
}

export default aboutme
