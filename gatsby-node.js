const { createFilePath } = require(`gatsby-source-filesystem`);
const { isExportDeclaration } = require("typescript");

exports.onCreateNode = ({ node, getNode, actions}) => {
    const { createNodeField } = actions;

    if(node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `src/content/posts/`, trailingSlash: false});
        createNodeField({
            node,
            name: `slug`,
            value: `/content${slug}`,
        });
    }
};

module.exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const blogTemplate = require.resolve(`./src/templates/BlogPost.js`)
    
    const response = await graphql(`
        query MyQuery {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `
    )

    if (response.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const posts = response.data.allMarkdownRemark.edges;
    const postsPerPage = 6;
    const numPages = Math.ceil(posts.length / postsPerPage);
    
    Array.from({ length: numPages }).forEach((_,i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i+1}`,
            component: path.resolve("./src/templates/BlogPagination.js"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i+1,
            },
        })
    })

    response.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: edge.node.fields.slug,
            context: {
                slug: edge.node.fields.slug,
            },
        })
    });
}


