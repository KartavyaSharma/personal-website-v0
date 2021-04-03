import React from 'react'

function blog(props) {
    return (
        <div className={props.header} id="blog">
            <div className={props.topNum}>03</div>
            <div className={props.topTitle}>My blog</div>
            <div className={props.body}>
                In dev.
            </div>
        </div>
    )
}

export default blog
