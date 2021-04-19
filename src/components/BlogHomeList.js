import React from 'react'

function BlogHomeList(props) {

    function renderBlogPostList() {
        return(
            <div>
                {
                    props.listData.filter(post => post.node.frontmatter.title !== "")
                    .map(post => {
                        <div>
                            
                        </div>
                    })
                }
            </div>
        );
    }

    return (
        <div>
            
        </div>
    )
}

export default BlogHomeList
