import React from 'react'

import IndexLayout from '../components/layout/IndexLayout'

import getWorkData from '../static_queries/getWorkData'

export default function Work() {

    const data = getWorkData();

    console.log(data);

    function renderWorkList() {
        return(
            <div>
                {
                    data.map(exp => {
                        return(
                            <div>{exp.node.company}</div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <IndexLayout ident="work" idx='03' name="Work">
            <ul>
                {renderWorkList()}
            </ul>
        </IndexLayout>
    );
}