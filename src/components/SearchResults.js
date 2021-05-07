import React from 'react'

export default function SearchResults(props) {

    function renderSearchResults() {
        return (
            <div>
                {
                    props.postArray.map(post => {
                        return (
                            <li>
                                {props.isEmpty ? post.frontmatter.title : post.node.frontmatter.title}
                            </li>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div>
            <ul>{renderSearchResults()}</ul>
        </div>
    );
}