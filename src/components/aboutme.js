import React from 'react'

function aboutme(props) {
    return (
        <div className={props.header} id="about-me">
            <div className={props.topNum}>01</div>
            <div className={props.topTitle}>About me</div>
            <div className='flex flex-row'>
                <div className={props.body}>
                    <p>
                        Hi! I'm a freshman at UC Berkeley studying Electrical Engineering and Computer science. 
                        <br/><br/>
                        As a programmer, I have experience in computational thinking, data structures, abstraction, and problem solving. I am passionate about
                        issues our society faces as a consequence of technological proliferation and coming up with solutions to address said issues. I am
                        actively involved in Competitive Programming as a hobby and as a means to hone my problem solving skills. I'm always on the lookout to
                        learn new optimization techniques and algorithms I'm yet not privy to.
                        <br/><br/>
                        To keep up with the industry, I can often be found enrolled in coursework for new technologies I mean to add to my skillset. My current
                        interests include learning new Web Dev technologies (through application, such as this website), and learning more about Machine
                        Learning and its applications. Soon enough, I hope to utilize machine learning to address social issues to come up with extensible
                        and adaptive solutions to some of the biggest problems we face today.
                        <br/><br/>
                        I am currently involved with freelance web development for small to medium projects and am always interested in a challenge. Reach out
                        using the contact form below or through email to connect!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default aboutme
