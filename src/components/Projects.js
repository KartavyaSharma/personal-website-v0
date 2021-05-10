import React from 'react'

import IndexLayout from '../components/layout/IndexLayout'

import ProjectList from "../components/ProjectList"
import getProjectList from "../static_queries/getProjectList"

function Projects() {
    const data = getProjectList();
    return (
        <IndexLayout ident="projects" idx="02" name="Projects">
            <ProjectList listData={data}/>
        </IndexLayout>
    )
}

export default Projects
