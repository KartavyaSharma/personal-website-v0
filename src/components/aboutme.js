import React from 'react'

function aboutme(props) {
    return (
        <div className={props.header} id="about-me">
            <div className='flex flex-row'>
                <div className={props.topNum}>01</div>
                <div className={props.topTitle}>About me</div>
            </div>
            <div className={`flex flex-row pl-11 ${props.body}`}>
                Hey, this is about me!
            </div>
        </div>
    )
}

export default aboutme
