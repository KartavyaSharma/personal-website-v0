import React from 'react'
import { Link } from 'gatsby'

import ProjectList from "../components/ProjectList"
import getProjectList from "../static_queries/getProjectList"

function Projects(props) {
    const data = getProjectList();
    return (
        <div className={props.header} id="projects">
            <div className={props.topNum}>02</div>
            <div className={props.topTitle}>Projects</div>
            <ProjectList listData={data}/>
        </div>
    )
}

export default Projects
