import React from 'react'

import ProjectList from "../components/ProjectList"
import getProjectList from "../static_queries/getProjectList"

function Projects(props) {
    const data = getProjectList();
    return (
        <div className={props.header} id="projects">
            <div data-sal="slide-right" data-sal-easing="ease" data-sal-duration="1000">
                <div className={props.topNum} >02</div>
                <div className={props.topTitle}>Projects</div>
            </div>
            <ProjectList listData={data}/>
        </div>
    )
}

export default Projects
