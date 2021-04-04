import React from 'react'

function BlogList(props) {

    function renderBlogData() {
        return(
            <div>
                {
                    props.listData.filter(blog => blog.node.title !== "")
                    .map(blog => {
                        return(
                            <div>
                                <h1>{blog.node.frontmatter.title}</h1>
                                <h5>{blog.node.frontmatter.description}</h5>
                                <p>{blog.node.frontmatter.author_info.author_name}<br/><br/>{blog.node.frontmatter.author_info.author_bio}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
    return (
        <div>
            <ul>{renderBlogData()}</ul>
        </div>
    )
}

export default BlogList
